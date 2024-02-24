var div = document.getElementById('fileName');

function selectDownload() {
    // getComputedStyleを使って実際のスタイルを取得する
    var computedStyle = window.getComputedStyle(div);

    if (computedStyle.getPropertyValue('display') === 'none') {
        div.style.display = 'block';
        canvas.discardActiveObject();
        canvas.discardActiveGroup();
        canvas.renderAll();
    }
}


window.onclick = function (event) {
    if (event.target == downloadcancel) {
        div.style.display = 'none';
    }
}

// 現在の日付を取得
var currentDate = new Date();

// toLocaleStringを使用して日付と時刻をまとめてフォーマット
var formattedDateTime = currentDate.toLocaleString();

// 結果を表示
//console.log('現在の日付と時刻: ' + formattedDateTime);

//png形式で画像を保存
document.getElementById("png").onclick = (event) => {
    let canvas = document.getElementById("canvas");

    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = formattedDateTime + ".png";
    link.click();
}

//jpg形式で画像を保存
document.getElementById("jpg").onclick = (event) => {
    let canvas = document.getElementById("canvas");

    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpeg");
    link.download = formattedDateTime + ".jpg";
    link.click();
}

//pdf形式で画像を保存

// Canvasに描画するコードはこちらに追加

function pdfdownload() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    var width = pdf.internal.pageSize.getWidth();
    var height = pdf.internal.pageSize.getHeight();
    const canvasDataURL = canvas.toDataURL('image/png');

    pdf.addImage(canvasDataURL, 'PNG', 0, 0, width, height);
    pdf.save(formattedDateTime + '.pdf');
}
