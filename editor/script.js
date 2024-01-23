// let lockHistory = false;
// const undo_history = [];
// const redo_history = [];

var canvas = this.__canvas = new fabric.Canvas('canvas', { backgroundColor: "#fff" });
canvas.setHeight(document.getElementById("movable").clientHeight);
canvas.setWidth(document.getElementById("movable").clientWidth);
document.getElementById("Height").value = "842";
document.getElementById("Width").value = "595";

// undo_history.push(JSON.stringify(canvas));
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
var nav6 = document.querySelector("#contents6");
var btn6 = document.querySelector("#btn6");
var main = document.querySelector("#canvas-container");

const fileInput = document.querySelector("#imageFileInput");
const canvasCtx = canvas.getContext("2d");
const settings = {};
let image = null;

btn1.addEventListener("click", open_close1);
btn2.addEventListener("click", open_close2);
btn3.addEventListener("click", open_close3);
btn4.addEventListener("click", open_close4);
btn5.addEventListener("click", open_close5);
btn6.addEventListener("click", open_close6);

var menuState = 0;
var menu1 = 0;
var menu2 = 0;
var menu3 = 0;
var menu4 = 0;
var menu5 = 0;
var menu6 = 0;

var backRGB = document.getElementById("backColor").value;

function open_close1() {
    if (menuState === 0) {
        menuState = 1;
        menu1 = 1;
        nav1.style.display = "block";
        main.style.left = "330px";
    } else {
        if (menu1 === 0) {
            menu1 = 1;
            menu2 = 0;
            menu3 = 0;
            menu4 = 0;
            menu5 = 0;
            menu6 = 0;
            nav1.style.display = "block";
            nav2.style.display = "none";
            nav3.style.display = "none";
            nav4.style.display = "none";
            nav5.style.display = "none";
            nav6.style.display = "none";
        } else {
            menuState = 0;
            menu1 = 0;
            nav1.style.display = "none";
            main.style.left = "80px";
        }
    }
    console.log(menuState);
}

function open_close2() {
    if (menuState === 0) {
        menuState = 1;
        menu2 = 1;
        nav2.style.display = "block";
        main.style.left = "330px";
    } else {
        if (menu2 === 0) {
            menu1 = 0;
            menu2 = 1;
            menu3 = 0;
            menu4 = 0;
            menu5 = 0;
            menu6 = 0;
            nav1.style.display = "none";
            nav2.style.display = "block";
            nav3.style.display = "none";
            nav4.style.display = "none";
            nav5.style.display = "none";
            nav6.style.display = "none";
        } else {
            menuState = 0;
            menu2 = 0;
            nav2.style.display = "none";
            main.style.left = "80px";
        }
    }
    console.log(menuState);
}

function open_close3() {
    if (menuState === 0) {
        menuState = 1;
        menu3 = 1;
        nav3.style.display = "block";
        main.style.left = "330px";
    } else {
        if (menu3 === 0) {
            menu1 = 0;
            menu2 = 0;
            menu3 = 1;
            menu4 = 0;
            menu5 = 0;
            menu6 = 0;
            nav1.style.display = "none";
            nav2.style.display = "none";
            nav3.style.display = "block";
            nav4.style.display = "none";
            nav5.style.display = "none";
            nav6.style.display = "none";
        } else {
            menuState = 0;
            menu3 = 0;
            nav3.style.display = "none";
            main.style.left = "80px";
        }
    }
    console.log(menuState);
}

function open_close4() {
    if (menuState === 0) {
        menuState = 1;
        menu4 = 1;
        nav4.style.display = "block";
        main.style.left = "330px";
    } else {
        if (menu4 === 0) {
            menu1 = 0;
            menu2 = 0;
            menu3 = 0;
            menu4 = 1;
            menu5 = 0;
            menu6 = 0;
            nav1.style.display = "none";
            nav2.style.display = "none";
            nav3.style.display = "none";
            nav4.style.display = "block";
            nav5.style.display = "none";
            nav6.style.display = "none";
        } else {
            menuState = 0;
            menu4 = 0;
            nav4.style.display = "none";
            main.style.left = "80px";
        }
    }
    console.log(menuState);
}

function open_close5() {
    if (menuState === 0) {
        menuState = 1;
        menu5 = 1;
        nav5.style.display = "block";
        main.style.left = "330px";
    } else {
        if (menu5 === 0) {
            menu1 = 0;
            menu2 = 0;
            menu3 = 0;
            menu4 = 0;
            menu5 = 1;
            menu6 = 0;
            nav1.style.display = "none";
            nav2.style.display = "none";
            nav3.style.display = "none";
            nav4.style.display = "none";
            nav5.style.display = "block";
            nav6.style.display = "none";
        } else {
            menuState = 0;
            menu5 = 0;
            nav5.style.display = "none";
            main.style.left = "80px";
        }
    }
    console.log(menuState);
}

function open_close6() {
    if (menuState === 0) {
        menuState = 1;
        menu6 = 1;
        nav6.style.display = "block";
        main.style.left = "330px";
    } else {
        if (menu6 === 0) {
            menu1 = 0;
            menu2 = 0;
            menu3 = 0;
            menu4 = 0;
            menu5 = 0;
            menu6 = 1;
            nav1.style.display = "none";
            nav2.style.display = "none";
            nav3.style.display = "none";
            nav4.style.display = "none";
            nav5.style.display = "none";
            nav6.style.display = "block";
        } else {
            menuState = 0;
            menu6 = 0;
            nav6.style.display = "none";
            main.style.left = "80px";
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

document.getElementById("input-files").onchange = function (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var image = new Image();
        image.src = e.target.result;
        image.onload = function () {
            var img = new fabric.Image(image);
            img.set({
                left: 50,
                top: 50
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
        } elseif(activeObject)
    }

    // Delete キーが押されたときのイベントを処理
    if (e.key === 'Delete') {
        // 選択されているオブジェクトを取得
        var activeObjects = canvas.getActiveObjects();
        // 選択されているオブジェクトが存在する場合
        if (activeObjects.length > 0) {
            // オブジェクトを削除
            canvas.remove(...activeObjects);
            // 描画を更新
            canvas.discardActiveObject().renderAll();
        }
    }
});

// canvas.on("object:added", function () {
//     if (lockHistory) return;
//     console.log("object:added");
//     undo_history.push(JSON.stringify(canvas));
//     redo_history.length = 0;
//     console.log(undo_history.length);
// });

// canvas.on("object:modified", function () {
//     if (lockHistory) return;
//     console.log("object:modified");
//     undo_history.push(JSON.stringify(canvas));
//     redo_history.length = 0;
//     console.log(undo_history.length);
// });

// function undo() {
//     if (undo_history.length > 0) {
//         lockHistory = true;
//         if (undo_history.length > 1) redo_history.push(undo_history.pop()); //最初の白紙はredoに入れない
//         const content = undo_history[undo_history.length - 1];
//         canvas.loadFromJSON(content, function () {
//             canvas.renderAll();
//             lockHistory = false;
//         });
//     }
// }

// function redo() {
//     if (redo_history.length > 0) {
//         lockHistory = true;
//         const content = redo_history.pop();
//         undo_history.push(content);
//         canvas.loadFromJSON(content, function () {
//             canvas.renderAll();
//             lockHistory = false;
//         });
//     }
// }

// document.getElementById("undo").addEventListener("click", undo);
// document.getElementById("redo").addEventListener("click", redo);

function changeBackColor(obj, color) {
    obj.set({
        backgroundColor: color
    });

    canvas.renderAll();
}

document.getElementById("backColor").onchange = function () {
    backRGB = this.value;
    document.getElementById("backTransparent").checked = false;
    changeBackColor(canvas, backRGB);
}

document.getElementById('backTransparent').addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        changeBackColor(canvas, "transparent");
    } else {
        changeBackColor(canvas, backRGB);
    }
})

// キャンバス全体をクリア
function allClear() {
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);
    canvas.clear();
    canvas.renderAll();
    changeBackColor(canvas, "white");
    canvas.renderAll();
}


function handleSwitch(check) {
    if (check.checked) {
        document.getElementById("iconSelect").style.display = "block";
    } else {
        document.getElementById("iconSelect").style.display = "none";
        document.getElementById("preview2").setAttribute("src", "https://www.colorhexa.com/d7d7d7.png");
        document.getElementById("iconImage").value = "";
    }
}
