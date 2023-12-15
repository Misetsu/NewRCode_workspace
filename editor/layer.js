var canvasCount = 1; // 最初の canvas が予め存在するので 1 から始める

function addCanvasLayer() {
    if (canvasCount < 10) { // 上限が 10 枚なので制限
        canvasCount++;

        // 新しい canvas 要素を作成
        var newCanvas = document.createElement('canvas');

        // canvas の属性を設定
        newCanvas.width = 595; // 任意の幅
        newCanvas.height = 842; // 任意の高さ

        // ID を設定
        newCanvas.id = 'canvas';// ID を設定

        // CSS スタイルを設定
        newCanvas.style.paddingLeft = '0';
        newCanvas.style.paddingRight = '0';
        newCanvas.style.margin = 'auto';
        newCanvas.style.display = 'block';

        // canvas の位置を absolute に設定
        newCanvas.style.position = 'absolute';

        // 各キャンバスを同じ位置に重ねて配置
        newCanvas.style.top = '0';
        newCanvas.style.left = '0';

        // 特定の ID を持つ div タグを取得
        var targetDiv = document.querySelector(".canvas-container");

        // 特定の div タグに canvas を追加
        targetDiv.appendChild(newCanvas);

        // 描画コンテキストを取得
        var ctx = newCanvas.getContext('2d');

        // 色を設定
        var colors = ["red", "yellow", "green", "blue", "orange", "cyan", "pink", "brown", "purple"];
        var colorIndex = canvasCount - 1; // 2 枚目から始めるので 1 引く

        if (colorIndex < colors.length) {
            ctx.fillStyle = colors[colorIndex];
            ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
        } else {
            ctx.fillStyle = "gray"; // 色が足りない場合はデフォルトで灰色
            ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
        }
    } else {
        alert("上限の 10 枚に達しました。これ以上追加できません。");
    }
}

