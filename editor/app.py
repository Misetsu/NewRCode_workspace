#事前準備
#
#$. site/Scripts/activate             #仮想環境の起動
#$ pip flask　　　　　　　　　　　　　　#flask等をインストール
#$ pip install pillow qrcode          #        "
#$ pip install CuteR                  #        "
#$ pip install pyshorteners           #        "
#
#実行まで
#
#$ cd editor                          #(当ファイルの置き場)editorに向かい
#$ flask run -p 4000                  #flaskをポート4000番で実行 これでローカル起動可能 多分”http://127.0.0.1:4000”では入れる
#
#ngrokで公開URLにする手順
#※←は初回だけ
#
#※ ngrok公式サイトに向かってZIPファイルをダウンロード&解凍
#ターミナル増設
#$ ngrok http 4000                    #ポート4000番の公開URLを発行、Forwardingの行にあるURLがそう
#
#
#
#
#
#

from flask import Flask, request, jsonify, render_template, send_from_directory
from PIL import Image
from io import BytesIO
from werkzeug.utils import secure_filename
from send import pre, pre2
from datetime import datetime
import base64
import os
import re


app = Flask(__name__)
UPLOAD_FOLDER = './upload'
ICON_FOLDER = './static/jicon'
IMAGE_FOLDER = './images'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'gif', 'PNG', 'JPG', 'GIF'])
ICON = ('amazon.jpg', 'chrome.jpg', 'discord.jpg', 'facebook.jpg', 'google.jpg', 
        'instagram.jpg', 'line.jpg', 'snapchat.jpg', 'tiktok.jpg', 'twitch.jpg', 
        'twitter.jpg', 'wechat.jpg', 'weibo.jpg', 'whatsapp.jpg', 'youtube.jpg')

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ICON_FOLDER'] = ICON_FOLDER
app.config['IMAGE_FOLDER'] = IMAGE_FOLDER

def allwed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/canvas')
def canvas():
    return render_template('canvas.html')

@app.route('/en')
def en():
    return render_template('home-en.html')

@app.route('/cn')
def cn():
    return render_template('home-cn.html')

@app.route('/cnt')
def cnt():
    return render_template('home-cnt.html')

@app.route('/test')
def test():
    return render_template('test.html')

@app.route('/qrcode')
def qrcode():
    return render_template('qrcode.html')

@app.route('/manual')
def manual():
    return render_template('manual.html')

@app.route('/manual-cnt')
def manualCNT():
    return render_template('manual-cnt.html')

@app.route('/manual-cn')
def manualCN():
    return render_template('manual-cn.html')

@app.route('/manual-en')
def manualEN():
    return render_template('manual-en.html')

@app.route('/policy')
def policy():
    return render_template('policy.html')

@app.route('/policy-en')
def policyEN():
    return render_template('policy-en.html')

@app.route('/policy-cnt')
def policyCNT():
    return render_template('policy-cnt.html')

@app.route('/policy-cn')
def policyCN():
    return render_template('policy-cn.html')

@app.route('/result/<path>/<imageId>')
def result(path, imageId):
    qrpath = "./" + path + "/" + imageId
    return render_template("result.html", image_path=qrpath)

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', minetype='image/vnd.microsoft.icon')

@app.route('/qrform', methods=["POST", "GET"])
def form():
    if request.method == 'POST':
        data = request.get_json()
        
        filename1 = data[1]["filename"]
        base64Img = data[0]["backimageURL"]
        code = base64.b64decode(base64Img.split(',')[1])
        image_decoded = Image.open(BytesIO(code))
        image_decoded.save(os.path.join(app.config['UPLOAD_FOLDER'], filename1))
        
        if data[2]["iconCode"] == "":
            filepath2 = ""
        else:
            filepath2 = os.path.join(app.config['ICON_FOLDER'], ICON[int(data[2]["iconCode"])])
            
        filepath1 = os.path.join(app.config['UPLOAD_FOLDER'], filename1)
        url = data[3]["url"]
        color = data[4]["color"]
        colorCode = data[5]["colorCode"]
        alpha = 255 - int(data[6]["alpha"])
        
        pre(filepath1, filepath2, url, filename1, color, colorCode, str(alpha))

        qrpath = "./static/images/" + filename1
        
        with open(qrpath, "rb") as f:
            image_binary = f.read()    
        image = base64.b64encode(image_binary).decode("utf-8")
        
        return jsonify({'status': True, 'image': image})
    
    if request.method == "GET":
        return ""

@app.route('/giftest', methods=["POST", "GET"])
def gif():
    print("0")
    if request.method == 'POST':
        print("0.5")
        image1 = request.files["gifImage"]
        if image1 and allwed_file(image1.filename):
            dt = datetime.now().strftime('%Y%m%d%H%M%S%f')[:-3]
            filename1 = dt + ".gif"
            print("1")
            image1.save(os.path.join(app.config['UPLOAD_FOLDER'], filename1))
        
        filepath1 = os.path.join(app.config['UPLOAD_FOLDER'], filename1)
        url = request.form["gifURL"]
        color = request.form["gifQRColor"]
        colorCode = request.form["gifColorCode"]
        alpha = 255 - int(request.form["gifQRAlpha"])
        
        pre2(filepath1, url, filename1, color, colorCode, str(alpha))
        
        qrpath = "./images/" + filename1
        
        return render_template("result.html", image_path=qrpath)
    
@app.route('/jpgtest', methods=["POST", "GET"])
def jpg():
    if request.method == "POST":
        data = request.get_json()
        
        base64Img = data[0]["backimageURL"]
        code = base64.b64decode(base64Img.split(',')[1])
        image_decoded = Image.open(BytesIO(code))
        dt = datetime.now().strftime('%Y%m%d%H%M%S%f')[:-3]
        filename1 = dt + ".jpg"
        image_decoded.save(os.path.join(app.config['UPLOAD_FOLDER'], filename1))
        
        if data[1]["iconCode"] == "":
            filepath2 = ""
        else:
            filepath2 = os.path.join(app.config['ICON_FOLDER'], ICON[int(data[1]["iconCode"])])
            
        filepath1 = os.path.join(app.config['UPLOAD_FOLDER'], filename1)
        url = data[2]["url"]
        color = data[3]["color"]
        colorCode = data[4]["colorCode"]
        alpha = 255 - int(data[5]["alpha"])

        pre(filepath1, filepath2, url, filename1, color, colorCode, str(alpha))
        
        return jsonify({'status': True, 'imageId': filename1})


if __name__ == '__main__':
    app.run(debug=True,port=4000)

