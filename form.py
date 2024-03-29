from flask import Flask, request, jsonify, render_template, redirect, url_for
from PIL import Image
from io import BytesIO
from datetime import datetime
import os
import base64

UPLOAD_FOLDER = './uploads'
ICON_FOLDER = './static/icon'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'gif'])
ICON = ('amazon.png', 'chrome.png', 'discord.png', 'facebook.png', 'google.png', 
        'instagram.png', 'line.png', 'snapchat.png', 'tiktok.png', 'twitch.png', 
        'twitter.png', 'wechat.png', 'weibo.png', 'whatsapp.png', 'youtube.png')

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ICON_FOLDER'] = ICON_FOLDER

def allwed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/qrform', methods=["GET", "POST"])
def form():
    if request.method == 'GET':
        return render_template('/canvas')
    if request.method == 'POST':
        image1 = request.file["backImage"]
        if image1 and allwed_file(image1.filename):
            dt = datetime.utcnow().strftime('%Y%m%d%H%M%S%f')[:-3]
            filename1 = dt + filename1
            image1.save(os.path.join(app.config['UPLOAD_FOLDER'], filename1))
            
        image2 = request.form["iconImage"]
        if image2 == "":
            filepath2 = ""
        else:
            filepath2 = os.path.join(app.config['ICON'], ICON[int(image2)])
        
        filepath1 = os.path.join(app.config['UPLOAD_FOLDER'], dt, filename1)
        url = request.form["urlText"]
        color = request.form["qrColor"]
        colorCode = request.form["colorCode"]
        alpha = request.form["qrAlpha"]
    
    return(f'{filepath1}, {filepath2}, {filename1}, {url}, {color}, {colorCode}, {alpha}')

@app.route('/qrform', methods=["GET", "POST"])
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
        alpha = data[6]["alpha"]
        
        qrpath = pre(filepath1, filepath2, url, filename1, color, colorCode, alpha)
        
        with open(qrpath, "rb") as f:
            image_binary = f.read()    
        image = base64.b64encode(image_binary).decode("utf-8")
        
        return jsonify({'status': True, 'image': image})
    

@app.route('/giftest', methods=["GET", "POST"])
def gif():
    if request.method == 'POST':
        image1 = request.files["gifImage"]
        if image1 and allwed_file(image1.filename):
            dt = datetime.utcnow().strftime('%Y%m%d%H%M%S%f')[:-3]
            if image1.filename[-3:] == "gif":
                filename1 = dt + ".gif"
                filepath2 = ""
            image1.save(os.path.join(app.config['UPLOAD_FOLDER'], filename1))
        
        filepath1 = os.path.join(app.config['UPLOAD_FOLDER'], filename1)
        url = request.form["gifURL"]
        color = request.form["gifQRColor"]
        colorCode = request.form["gifColorCode"]
        alpha = request.form["gifQRAlpha"]
        
        pre2(filepath1, url, filename1, color, colorCode, alpha)
        
        qrpath = "./images/" + filename1
        
        return render_template("result.html", image_path=qrpath)
    
@app.route('/jpgtest', methods=["GET", "POST"])
def jpg():
    if request.method == "POST":
        data = request.get_json()
        
        base64Img = data[0]["backimageURL"]
        code = base64.b64decode(base64Img.split(',')[1])
        image_decoded = Image.open(BytesIO(code))
        dt = datetime.utcnow().strftime('%Y%m%d%H%M%S%f')[:-3]
        filename1 = dt + ".jpg"
        image_decoded.save(os.path.join(app.config['UPLOAD_FOLDER'], filename1))
        
        if data[2]["iconCode"] == "":
            filepath2 = ""
        else:
            filepath2 = os.path.join(app.config['ICON_FOLDER'], ICON[int(data[2]["iconCode"])])
            
        filepath1 = os.path.join(app.config['UPLOAD_FOLDER'], filename1)
        url = data[3]["url"]
        color = data[4]["color"]
        colorCode = data[5]["colorCode"]
        alpha = data[6]["alpha"]
        
        pre(filepath1, filepath2, url, filename1, color, colorCode, alpha)
        
        qrpath = "./images/" + filename1
        
        return redirect(url_for('result', qrpath=qrpath))
            
@app.route('/result')
def result(qrpath):
    return render_template("result.html", image_path=qrpath)

@app.route("/result/images/qrcode")
def reresult():
    return redirect(url_for("result"))
    
@app.route('/save', methods=["GET", "POST"])
def saveImage():
    if request.method == 'POST':
        data = request.get_json()
        
        filename1 = data[1]["filename"]
        base64Img = data[0]["backimageURL"]
        code = base64.b64decode(base64Img.split(',')[1])
        image_decoded = Image.open(BytesIO(code))
        image_decoded.save(os.path.join(app.config['UPLOAD_FOLDER'], filename1))

        qrpath = os.path.join(app.config['UPLOAD_FOLDER'], filename1)
        
        with open(qrpath, "rb") as f:
            image_binary = f.read()    
        image = base64.b64encode(image_binary).decode("utf-8")
        
        return jsonify({'status': True, 'image': image})