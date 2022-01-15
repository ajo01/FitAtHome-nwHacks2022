from unittest import case
from flask import Flask, render_template, Response
import cv2
import numpy as np
import time
import PoseModule as pm


app = Flask(__name__)

cap = cv2.VideoCapture(0)
detector = pm.poseDetector()
status = ""
countApi = 0


def setStatus(state):
    global status
    status = state


def gen_frames():  # generate frame by frame from camera
    num = 5
    count = 0
    dir = 0
    global countApi
    while True:
        # Capture frame-by-frame
        success, img = cap.read()
        img = detector.findPose(img, False)
        lmList = detector.findPosition(img, draw=False)
        if len(lmList) != 0:
            if num == 1:  # right hand bicep-curl
                angle = detector.findAngle(img, 12, 14, 16)
                per = np.interp(angle, (250, 310), (0, 100))
                bar = np.interp(angle, (250, 310), (650, 100))
            if num == 2:  # left hand bicep-curl
                angle = detector.findAngle(img, 11, 13, 15)
                per = np.interp(angle, (250, 310), (0, 100))
                bar = np.interp(angle, (250, 310), (650, 100))
            if num == 3:  # left leg squat
                angle = detector.findAngle(img, 23, 25, 27)
                per = np.interp(angle, (250, 310), (0, 100))
                bar = np.interp(angle, (250, 310), (650, 100))
            if num == 4:  # right leg squat
                angle = detector.findAngle(img, 24, 26, 28)
                per = np.interp(angle, (170, 280), (0, 100))
                bar = np.interp(angle, (170, 280), (650, 100))
            if num == 5:  # lateral raises
                angle = detector.findAngle(img, 14, 12, 24)
                angle1 = detector.findAngle(img, 13, 11, 23)
                if angle1 < 83:
                    cv2.putText(img, str("Move hands higher"), (45, 670), cv2.FONT_HERSHEY_PLAIN, 5,
                                (255, 0, 0), 10)
                    setStatus("high")
                if angle1 > 83:
                    cv2.putText(img, str("Move hands lower"), (45, 670), cv2.FONT_HERSHEY_PLAIN, 5,
                                (255, 0, 0), 10)
                    setStatus("low")
                per = np.interp(angle1, (16, 83), (0, 100))
                bar = np.interp(angle1, (16, 83), (650, 100))
            color = (255, 0, 255)
            if per == 100:
                color = (0, 255, 0)
                if dir == 0:
                    count += 0.5
                    countApi += 0.5
                    dir = 1
            if per == 0:
                color = (0, 255, 0)
                if dir == 1:
                    count += 0.5
                    countApi += 0.5
                    dir = 0
            cv2.rectangle(img, (1100, 100), (1175, 650), color, 3)
            cv2.rectangle(img, (1100, int(bar)),
                          (1175, 650), color, cv2.FILLED)
            cv2.putText(img, f'{int(per)} %', (1100, 75), cv2.FONT_HERSHEY_PLAIN, 4,
                        color, 4)
            cv2.rectangle(img, (0, 450), (250, 720), (0, 255, 0), cv2.FILLED)
            cv2.putText(img, str(int(count)), (45, 670), cv2.FONT_HERSHEY_PLAIN, 15,
                        (255, 0, 0), 25)

        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', img)
            img = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + img + b'\r\n')  # concat frame one by one and show result


@ app.route('/status', methods=['GET'])
def status():
    return {'status': status}


@app.route('/count', methods=['GET'])
def count():
    return {'count': countApi}


@ app.route('/video_feed', methods=['GET'])
def video_feed():
    # Video streaming route. Put this in the src attribute of an img tag
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


@ app.route('/', methods=['GET'])
def index():
    """Video streaming home page."""
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
