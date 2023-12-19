@app.route('/qrform', methods=["GET", "POST"])
def form():
    if request.method == 'GET':
        return render_template('/canvas')
    if request.method == 'POST':
        image1 = request.file["backImage"]
        if image1 and allwed_file(image1.filename):
            filename1 = secure_filename(image1.filename)
            image1.save(os.path.join(app.config['UPLOAD_FOLDER'], filename1))
        
        url = request.form["urlText"]
        color = request.form["qrColor"]
        colorCode = request.form["colorCode"]
        alpha = request.form["qrAlpha"]
    
    print(filename1, url, color, colorCode, alpha)