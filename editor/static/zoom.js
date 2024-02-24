// const canvascontainer1 = document.getElementById('canvas');
// const canvascontainer2 = document.querySelector('.upper-canvas');
const canvascontainer = document.getElementById("canvas-container");
const zoomSlider = document.getElementById('zoom-slidebar');

var movableDiv = document.getElementById('movable');
var canvasSpace = document.getElementsByTagName('canvas');
// var canvasContain = document.getElementById("canvas-container");

zoomSlider.addEventListener('input', function () {
    sliderScale = zoomSlider.value;
    movableDiv.style.transform = 'scale(' + sliderScale + ')';
    // canvascontainer2.style.transform = `scale(${sliderScale})`;
    resizeCanvas();
});

function resizeCanvas() {
    canvasSpace.width = movableDiv.offsetWidth;
    canvasSpace.height = movableDiv.offsetHeight;
}

// ウィンドウの中心座標を計算
var centerX = canvascontainer.offsetWidth / 2 - movableDiv.offsetWidth / 2;
var centerY = (window.innerHeight - 75) / 2 - movableDiv.offsetHeight / 2;

// キャンバスの初期位置を設定
movableDiv.style.left = centerX + 'px'; // ウィンドウの中心に配置
movableDiv.style.top = centerY + 'px'; // ウィンドウの中心に配置

// 最初に1回実行してキャンバスの初期サイズを設定
resizeCanvas();

var offsetX, offsetY, isDragging = false;

// マウスダウンイベント
document.addEventListener('mousedown', function (e) {
    if (e.button == 2) {
        isDragging = true;
        offsetX = e.clientX - movableDiv.getBoundingClientRect().left + canvascontainer.getBoundingClientRect().left;
        offsetY = e.clientY - movableDiv.getBoundingClientRect().top + canvascontainer.getBoundingClientRect().top;
        div.style.cursor = 'grabbing';
    }
});

// マウスアップイベント
document.addEventListener('mouseup', function () {
    isDragging = false;
    movableDiv.style.cursor = 'grab';
});

// マウスムーブイベント
document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        movableDiv.style.left = e.clientX - offsetX + 'px';
        movableDiv.style.top = e.clientY - offsetY + 'px';

        // ドラッグ中にキャンバスのサイズを更新
        resizeCanvas();
    }
});

canvascontainer.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);