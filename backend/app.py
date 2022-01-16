import argparse
import asyncio
import json
import logging
import os
import ssl
import uuid
import PoseModule as pm
import numpy as np

import cv2
from aiohttp import web
import aiohttp_cors
from av import VideoFrame

from aiortc import MediaStreamTrack, RTCPeerConnection, RTCSessionDescription
from aiortc.contrib.media import MediaBlackhole, MediaPlayer, MediaRecorder, MediaRelay

ROOT = os.path.dirname(__file__)

logger = logging.getLogger("pc")
pcs = set()
relay = MediaRelay()

detector = pm.poseDetector()

class VideoTransformTrack(MediaStreamTrack):
    """
    A video stream track that transforms frames from an another track.
    """

    kind = "video"

    def __init__(self, track, transform, datachannel):
        super().__init__()  # don't forget this!
        self.track = track
        self.transform = transform
        self.datachannel = datachannel
        self.dir = 0
        self.count = 0

    async def recv(self):
        frame = await self.track.recv()

        if self.transform == "cartoon":
            print('hjello')
        else:
            img = frame.to_ndarray(format="bgr24")
            img = detector.findPose(img, False)
            lmList = detector.findPosition(img, draw=False)
            
            angle = detector.findAngle(img, 14, 12, 24)
            angle1 = detector.findAngle(img, 13, 11, 23)
            if angle1 < 83:
                cv2.putText(img, str("Move hands higher"), (45, 670), cv2.FONT_HERSHEY_PLAIN, 5,
                            (255, 0, 0), 10)
                message=""
            if angle1 > 83:
                cv2.putText(img, str("Move hands lower"), (45, 670), cv2.FONT_HERSHEY_PLAIN, 5,
                            (255, 0, 0), 10)
            
            per = np.interp(angle1, (16, 83), (0, 100))

            color="red"

            if per == 100:
                color="green"
                if self.dir == 0:
                    self.count += 0.5
                    self.dir = 1
            if per == 0:
                color="green"
                if self.dir == 1:
                    self.count += 0.5
                    self.dir = 0


            if datachannel != "1":
                datachannel.send(color + " " + str(self.dir) + " " + str(self.count) + " " + str(per))


            new_frame = VideoFrame.from_ndarray(img, format="bgr24")
            new_frame.pts = frame.pts
            new_frame.time_base = frame.time_base
            return new_frame


async def index(request):
    content = open(os.path.join(ROOT, "index.html"), "r").read()
    return web.Response(content_type="text/html", text=content)


async def javascript(request):
    content = open(os.path.join(ROOT, "client.js"), "r").read()
    return web.Response(content_type="application/javascript", text=content)


async def offer(request):
    params = await request.json()
    offer = RTCSessionDescription(sdp=params["sdp"], type=params["type"])

    pc = RTCPeerConnection()
    pc_id = "PeerConnection(%s)" % uuid.uuid4()
    pcs.add(pc)

    def log_info(msg, *args):
        logger.info(pc_id + " " + msg, *args)

    log_info("Created for %s", request.remote)

    # EDIT THIS TO CREATE SOME AUDIO MODIFICATION
    # player = MediaPlayer(os.path.join(ROOT, "demo-instruct.wav"))
    # if args.record_to:
    #     recorder = MediaRecorder(args.record_to)
    # else:
    #     recorder = MediaBlackhole()
    recorder = MediaBlackhole()

    datachannel = "1"

    @pc.on("datachannel")
    def on_datachannel(channel):
        global datachannel
        datachannel = channel

        @channel.on("message")
        def on_message(message):
            if isinstance(message, str) and message.startswith("ping"):
                channel.send("pong" + message[4:])

    @pc.on("connectionstatechange")
    async def on_connectionstatechange():
        log_info("Connection state is %s", pc.connectionState)
        if pc.connectionState == "failed":
            await pc.close()
            pcs.discard(pc)

    @pc.on("track")
    def on_track(track):        
        log_info("Track %s received", track.kind)

        if track.kind == "audio":
            pc.addTrack(player.audio)
            recorder.addTrack(track)
        elif track.kind == "video":
            pc.addTrack(
                VideoTransformTrack(
                    relay.subscribe(track), transform=params["video_transform"], datachannel=datachannel
                )
            )
            if args.record_to:
                recorder.addTrack(relay.subscribe(track))

        @track.on("ended")
        async def on_ended():
            log_info("Track %s ended", track.kind)
            await recorder.stop()

    # handle offer
    await pc.setRemoteDescription(offer)
    await recorder.start()

    # send answer
    answer = await pc.createAnswer()
    await pc.setLocalDescription(answer)

    return web.Response(
        content_type="application/json",
        text=json.dumps(
            {"sdp": pc.localDescription.sdp, "type": pc.localDescription.type}
        ),
    )


async def on_shutdown(app):
    # close peer connections
    coros = [pc.close() for pc in pcs]
    await asyncio.gather(*coros)
    pcs.clear()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="WebRTC audio / video / data-channels demo"
    )
    parser.add_argument("--cert-file", help="SSL certificate file (for HTTPS)")
    parser.add_argument("--key-file", help="SSL key file (for HTTPS)")
    parser.add_argument(
        "--host", default="0.0.0.0", help="Host for HTTP server (default: 0.0.0.0)"
    )
    parser.add_argument(
        "--port", type=int, default=80, help="Port for HTTP server (default: 8080)"
    )
    parser.add_argument("--record-to", help="Write received media to a file."),
    parser.add_argument("--verbose", "-v", action="count")
    args = parser.parse_args()

    if args.verbose:
        logging.basicConfig(level=logging.DEBUG)
    else:
        logging.basicConfig(level=logging.INFO)

    if args.cert_file:
        ssl_context = ssl.SSLContext()
        ssl_context.load_cert_chain(args.cert_file, args.key_file)
    else:
        ssl_context = None

    app = web.Application()
    cors = aiohttp_cors.setup(app)

    app.on_shutdown.append(on_shutdown)
    app.router.add_get("/", index)
    app.router.add_get("/client.js", javascript)
    resource = cors.add(app.router.add_resource("/offer"), {
        "*": aiohttp_cors.ResourceOptions(allow_methods=["POST"], expose_headers="*",
                                          allow_headers="*",)
    })
    resource.add_route("POST", offer)
    port = os.getenv('PORT')
    web.run_app(
        app, access_log=None, host=args.host, port=port, ssl_context=ssl_context
    )
