var canvasCount = 1;
var buttonCounter = 0;
var maxButtons = 9;

function addCanvasLayer() {

    if (buttonCounter < maxButtons) {
        // 新しいボタンを作成
        var newButton = document.createElement("button");
        var buttonId = "layer" + (buttonCounter + 2); // IDを "layer2" から始める

        newButton.innerHTML = "レイヤー" + (buttonCounter + 2);

        // ボタンにIDを設定
        newButton.id = buttonId;

        // ボタンにonclick属性を設定
        newButton.setAttribute("onclick",buttonId + "()");

        // ボタンをコンテナに追加
        document.getElementById("button-container").appendChild(newButton);

        // カウンタを増やす
        buttonCounter++;
    }

    if (canvasCount < 10) {
        canvasCount++;

        // 新しい canvas 要素を作成
        var newCanvas = document.createElement('canvas');

        // canvas の属性を設定
        newCanvas.width = 595; // 任意の幅
        newCanvas.height = 842; // 任意の高さ

        // // ID を設定
        newCanvas.id = 'canvas' + canvasCount; // ID を数字で語尾につける
        //class を設定
        newCanvas.classList.add('lower-class');

        // CSS スタイルを設定
        newCanvas.style.paddingLeft = '0';
        newCanvas.style.paddingRight = '0';
        newCanvas.style.margin = 'auto';
        newCanvas.style.display = 'block';
        newCanvas.style.position = 'absolute';
        newCanvas.style.top = '0';
        newCanvas.style.left = '0';

       // 特定の ID を持つ div タグを取得
       var targetDiv = document.querySelector(".canvas-container");

        // 特定の div タグに canvas を追加
        targetDiv.appendChild(newCanvas);

        // Fabric.jsのCanvasオブジェクトを作成し、新しい canvas に関連付ける
        //var fabricCanvas = new fabric.Canvas(newCanvas);

        // 色を設定
        var colors = ["red", "yellow", "green", "blue", "orange", "cyan", "pink", "brown", "purple"];
        var colorIndex = canvasCount - 1;

        if (colorIndex < colors.length) {
            fabricCanvas.backgroundColor = colors[colorIndex];
        } else {
            fabricCanvas.backgroundColor = "gray";
        }

        fabricCanvas.renderAll();
    } else {
        alert("上限の 10 枚に達しました。これ以上追加できません。");
    }    
}


function layer1(){
    var canvas = document.getElementById("canvas");
}

function layer2(){
    var canvas = document.getElementById("canvas2");
}

function layer3(){
    var canvas = document.getElementById("canvas3");
}

function layer4(){
    var canvas = document.getElementById("canvas4");
}

function layer5(){
    var canvas = document.getElementById("canvas5");
}

function layer6(){
    var canvas = document.getElementById("canvas6");
}

function layer7(){
    var canvas = document.getElementById("canvas7");
}

function layer8(){
    var canvas = document.getElementById("canvas8");
}

function layer9(){
    var canvas = document.getElementById("canvas9");
}

function layer10(){
    var canvas = document.getElementById("canvas10");
}