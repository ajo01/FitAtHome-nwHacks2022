import { useEffect } from "react";

export const Webplayer = ({ setBorderColor, sendMessage, setTotalReps }) => {
  // get DOM elements

  useEffect(() => {
    // peer connection
    var pc = null;

    // data channel
    var dc = null,
      dcInterval = null;

    function createPeerConnection() {
      var config = {
        sdpSemantics: "unified-plan",
        iceServers: [{ urls: ["stun:stun.l.google.com:19302"] }],
      };

      pc = new RTCPeerConnection(config);

      // connect audio / video
      pc.addEventListener("track", function (evt) {
        if (evt.track.kind === "video")
          document.getElementById("video").srcObject = evt.streams[0];
      });

      return pc;
    }

    function negotiate() {
      return pc
        .createOffer()
        .then(function (offer) {
          return pc.setLocalDescription(offer);
        })
        .then(function () {
          // wait for ICE gathering to complete
          return new Promise(function (resolve) {
            if (pc.iceGatheringState === "complete") {
              resolve();
            } else {
              function checkState() {
                if (pc.iceGatheringState === "complete") {
                  pc.removeEventListener("icegatheringstatechange", checkState);
                  resolve();
                }
              }
              pc.addEventListener("icegatheringstatechange", checkState);
            }
          });
        })
        .then(function () {
          var offer = pc.localDescription;

          return fetch("http://localhost:8080/offer", {
            body: JSON.stringify({
              sdp: offer.sdp,
              type: offer.type,
              video_transform: "none",
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
        })
        .then(function (response) {
          return response.json();
        })
        .then(function (answer) {
          return pc.setRemoteDescription(answer);
        })
        .catch(function (e) {
          alert(e);
        });
    }

    function start() {
      console.log("CREATING RTCPEERCONNECTION");
      pc = createPeerConnection();

      var time_start = null;

      function current_stamp() {
        if (time_start === null) {
          time_start = new Date().getTime();
          return 0;
        } else {
          return new Date().getTime() - time_start;
        }
      }

      const parameters = { ordered: true };

      dc = pc.createDataChannel("chat", parameters);
      dc.onclose = function () {
        clearInterval(dcInterval);
      };
      dc.onopen = function () {};
      dc.onmessage = function (evt) {
        console.log(evt.data)
        if (setBorderColor) setBorderColor(evt.data.split(" ")[0]);
        if (sendMessage && evt.data.split(" ")[4] !== "none") sendMessage(evt.data.split(" ")[4].replaceAll("-", " "))
        if (setTotalReps) setTotalReps(evt.data.split(" ")[2])
      };

      var constraints = {
        audio: false,
        video: true,
      };

      if (constraints.audio || constraints.video) {
        navigator.mediaDevices.getUserMedia(constraints).then(
          function (stream) {
            stream.getTracks().forEach(function (track) {
              pc.addTrack(track, stream);
            });
            return negotiate();
          },
          function (err) {
            alert("Could not acquire media: " + err);
          }
        );
      } else {
        negotiate();
      }
    }
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      // close data channel
      if (dc) {
        dc.close();
      }

      // close transceivers
      if (pc.getTransceivers) {
        pc.getTransceivers().forEach(function (transceiver) {
          if (transceiver.stop) {
            transceiver.stop();
          }
        });
      }

      // close local audio / video
      pc.getSenders().forEach(function (sender) {
        sender.track.stop();
      });

      // close peer connection
      setTimeout(function () {
        pc.close();
        window.close();
      }, 100);
    });

    start();
  }, []);

  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <video
        style={{ flexGrow: "1", maxHeight: "100%", maxWidth: "100%" }}
        id="video"
        autoPlay={true}
        playsInline={true}
      ></video>
    </div>
  );
};
