// const canvascontainer1 = document.getElementById('canvas');
// const canvascontainer2 = document.querySelector('.upper-canvas');
const canvascontainer = document.getElementById("canvas-container");
const zoomSlider = document.getElementById('zoom-slidebar');

var movableDiv = document.getElementById('movable');
var canvasSpace = document.getElementsByTagName('canvas');
// var canvasContain = document.getElementById("canvas-container");
var sliderScale = zoomSlider.value;

zoomSlider.addEventListener('change', function () {
    sliderScale = zoomSlider.value;
    movableDiv.style.transform = "scale(" + sliderScale + ")";
    // canvascontainer2.style.transform = `scale(${sliderScale})`;
    resizeCanvas();
});

function resizeCanvas() {
    canvasSpace.width = movableDiv.offsetWidth;
    canvasSpace.height = movableDiv.offsetHeight;
}

// ウィンドウの中心座標を計算
var centerX = canvascontainer.offsetWidth / 2 - movableDiv.offsetWidth / 2;
var centerY = canvascontainer.offsetHeight / 2 - movableDiv.offsetHeight / 2;

// キャンバスの初期位置を設定
movableDiv.style.left = centerX + 'px'; // ウィンドウの中心に配置
movableDiv.style.top = centerY + 'px'; // ウィンドウの中心に配置

// 最初に1回実行してキャンバスの初期サイズを設定
resizeCanvas();

var offsetX, offsetY, boxX, boxY, isDragging = false;
document.getElementById("Height").value;
document.getElementById("Width").value;

// マウスダウンイベント
canvascontainer.addEventListener('mousedown', function (e) {
    if (e.button == 2) {
        isDragging = true;
        boxX = movableDiv.getBoundingClientRect().left + (document.getElementById("Width").value / 2) - ((document.getElementById("Width").value * sliderScale) / 2);
        boxY = movableDiv.getBoundingClientRect().top + (document.getElementById("Height").value / 2) - ((document.getElementById("Height").value * sliderScale) / 2);
        offsetX = e.clientX - boxX + canvascontainer.getBoundingClientRect().left;
        offsetY = e.clientY - boxY + canvascontainer.getBoundingClientRect().top;
        // offsetX = e.clientX - movableDiv.getBoundingClientRect().left + canvascontainer.getBoundingClientRect().left;
        // offsetY = e.clientY - movableDiv.getBoundingClientRect().top + canvascontainer.getBoundingClientRect().top;
        // boxX = movableDiv.getBoundingClientRect().left;
        // boxY = movableDiv.getBoundingClientRect().top;
        div.style.cursor = 'grabbing';
    }
});

// マウスアップイベント
document.addEventListener('mouseup', function () {
    isDragging = false;
    movableDiv.style.cursor = 'grab';
});

// マウスムーブイベント
canvascontainer.addEventListener('mousemove', function (e) {
    if (isDragging) {
        // var X = boxX + (e.clientX - offsetX) - - canvascontainer.getBoundingClientRect().left;
        // var Y = boxY + (e.clientY - offsetY) - canvascontainer.getBoundingClientRect().top;
        var X = e.clientX - offsetX;
        var Y = e.clientY - offsetY;
        movableDiv.style.left = X + 'px';
        movableDiv.style.top = Y + 'px';

        // ドラッグ中にキャンバスのサイズを更新
        resizeCanvas();
    }
});

canvascontainer.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);