var canvas = this.__canvas = new fabric.Canvas('canvas');

fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerColor = 'blue';
fabric.Object.prototype.cornerStyle = 'circle';

var nav1 = document.querySelector("#contents1");
var btn1 = document.querySelector("#btn1");
var nav2 = document.querySelector("#contents2");
var btn2 = document.querySelector("#btn2");
var nav3 = document.querySelector("#contents3");
var btn3 = document.querySelector("#btn3");
var nav4 = document.querySelector("#contents4");
var btn4 = document.querySelector("#btn4");
var nav5 = document.querySelector("#contents5");
var btn5 = document.querySelector("#btn5");
var main = document.querySelector(".canvas-container");

const fileInput = document.querySelector("#imageFileInput");
const canvasCtx = canvas.getContext("2d");
const settings = {};
let image = null;

btn1.addEventListener("click", open_close1);
btn2.addEventListener("click", open_close2);
btn3.addEventListener("click", open_close3);
btn4.addEventListener("click", open_close4);
btn5.addEventListener("click", open_close5);

var menuState = 0;
var menu1 = 0;
var menu2 = 0;
var menu3 = 0;
var menu4 = 0;
var menu5 = 0;

function open_close1() {
    if(menuState === 0){
        menuState = 1;
        menu1 = 1;
        nav1.style.display = "block";
        main.style.marginLeft = "330px";
    } else {
        if(menu1 === 0) {
            menu1 = 1;
            menu2 = 0;
            menu3 = 0;
            menu4 = 0;
            menu5 = 0;
            nav1.style.display = "block";
            nav2.style.display = "none";
            nav3.style.display = "none";
            nav4.style.display = "none";
            nav5.style.display = "none";
        } else {
            menuState = 0;
            menu1 = 0;
            nav1.style.display = "none";
            main.style.marginLeft = "80px";
        }
    }
    console.log(menuState);
}

function open_close2() {
    if(menuState === 0){
        menuState = 1;
        menu2 = 1;
        nav2.style.display = "block";
        main.style.marginLeft = "330px";
    } else {
        if(menu2 === 0) {
            menu1 = 0;
            menu2 = 1;
            menu3 = 0;
            menu4 = 0;
            menu5 = 0;
            nav1.style.display = "none";
            nav2.style.display = "block";
            nav3.style.display = "none";
            nav4.style.display = "none";
            nav5.style.display = "none";
        } else {
            menuState = 0;
            menu2 = 0;
            nav2.style.display = "none";
            main.style.marginLeft = "80px";
        }
    }
    console.log(menuState);
}

function open_close3() {
    if(menuState === 0){
        menuState = 1;
        menu3 = 1;
        nav3.style.display = "block";
        main.style.marginLeft = "330px";
    } else {
        if(menu3 === 0) {
            menu1 = 0;
            menu2 = 0;
            menu3 = 1;
            menu4 = 0;
            menu5 = 0;
            nav1.style.display = "none";
            nav2.style.display = "none";
            nav3.style.display = "block";
            nav4.style.display = "none";
            nav5.style.display = "none";
        } else {
            menuState = 0;
            menu3 = 0;
            nav3.style.display = "none";
            main.style.marginLeft = "80px";
        }
    }
    console.log(menuState);
}

function open_close4() {
    if(menuState === 0){
        menuState = 1;
        menu4 = 1;
        nav4.style.display = "block";
        main.style.marginLeft = "330px";
    } else {
        if(menu4 === 0) {
            menu1 = 0;
            menu2 = 0;
            menu3 = 0;
            menu4 = 1;
            menu5 = 0;
            nav1.style.display = "none";
            nav2.style.display = "none";
            nav3.style.display = "none";
            nav4.style.display = "block";
            nav5.style.display = "none";
        } else {
            menuState = 0;
            menu4 = 0;
            nav4.style.display = "none";
            main.style.marginLeft = "80px";
        }
    }
    console.log(menuState);
}

function open_close5() {
    if(menuState === 0){
        menuState = 1;
        menu5 = 1;
        nav5.style.display = "block";
        main.style.marginLeft = "330px";
    } else {
        if(menu5 === 0) {
            menu1 = 0;
            menu2 = 0;
            menu3 = 0;
            menu4 = 0;
            menu5 = 1;
            nav1.style.display = "none";
            nav2.style.display = "none";
            nav3.style.display = "none";
            nav4.style.display = "none";
            nav5.style.display = "block";
      } else {
            menuState = 0;
            menu5 = 0;
            nav5.style.display = "none";
            main.style.marginLeft = "80px";
      }
    }
    console.log(menuState);
}

function updateSetting(key, value) {
    if (!image) return; //画像がない場合リターン

    settings[key] = value;
    canvasCtx.filter = generateFilter();
}

function renderImage() {
    canvas.width = image.width;
    canvas.height = image.height;

    canvasCtx.filter = generateFilter();
    canvasCtx.drawImage(image, 0, 0);
}

document.getElementById("imageFileInput").onchange = function(e) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var image = new Image();
        image.src = e.target.result;
        image.onload = function() {
            var img = new fabric.Image(image);
            img.set({
                left: 100,
                top: 60
            });
        img.scaleToWidth(200);
        canvas.add(img).setActiveObject(img).renderAll();
        }
    }
    reader.readAsDataURL(e.target.files[0]);
}

document.addEventListener('keydown', function (e) {
    //Backspaceキーが押されたときのイベントを処理
    //Backspaceが押されたとき
    if (e.key === 'Backspace') {
        // 選択されているオブジェクトを取得
        var activeObject = canvas.getActiveObject();
        if (activeObject.type === 'i-text') {
            // テキストボックスの場合、テキストを空にする
            activeObject.text = '';
            canvas.renderAll();
        } else if (activeObject) {}
    }

    // Delete キーが押されたときのイベントを処理
    // デリートキーが押されたとき
    if (e.key === 'Delete') {
        // 選択されているオブジェクトを取得
        var activeObject = canvas.getActiveObject();
        // 選択されているオブジェクトが存在する場合
        if (activeObject) {
            // オブジェクトを削除
            canvas.remove(activeObject);
            canvas.renderAll();
        }
    }
});

resetSettings();