// ボタンをクリックしたときのイベントハンドラ
document.getElementById('sendToBackBtn').addEventListener('click', function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.sendToBack(activeObject);
        canvas.renderAll();
    }
});

document.getElementById('bringToFrontBtn').addEventListener('click', function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.bringToFront(activeObject);
        canvas.renderAll();
    }
});

document.getElementById('sendBackwardsBtn').addEventListener('click', function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.sendBackwards(activeObject, true);
        canvas.renderAll();
    }
});

document.getElementById('bringForwardBtn').addEventListener('click', function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.bringForward(activeObject, true);
        canvas.renderAll();
    }
});