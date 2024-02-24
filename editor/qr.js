const ICON = ['amazon.png', 'chrome.png', 'discord.png', 'facebook.png', 'google.png',
    'instagram.png', 'line.png', 'snapchat.png', 'tiktok.png', 'twitch.png',
    'twitter.png', 'wechat.png', 'weibo.png', 'whatsapp.png', 'youtube.png'];
var selectColor1 = document.getElementsByName("gifQRColor");
var inputFile1 = document.getElementById("gifImage");

selectColor1.forEach(function (selectColor) {
    selectColor.addEventListener("change", function () {
        if (selectColor.value === 'color') {
            document.getElementById("gifColorCode").style.display = "inline-block";
        } else {
            document.getElementById("gifColorCode").style.display = "none";
            document.getElementById("gifColorCode").value = "#000000";
        }
    });
});

function changehidden(num) {
    var path = "icon/" + ICON[num];
    document.getElementById('jpgIcon').value = num;
    document.getElementById('icon_preview').src = path;
}

inputFile1.addEventListener('change', (event) => {
    var [file] = event.target.files
    if (file) {
        document.getElementById("gifPreview").setAttribute('src', URL.createObjectURL(file));
    }
})

const cvs = document.getElementById('cvs2')
const cw = cvs.width
const ch = cvs.height
const out = document.getElementById('out2')
const oh = out.height
const ow = out.width

let ix = 0    // 中心座標
let iy = 0
let v = 1.0   // 拡大縮小率
const img = new Image()
img.crossOrigin = 'Anonymous'
img.onload = function (_ev) {   // 画像が読み込まれた
    ix = img.width / 2
    iy = img.height / 2
    let scl = parseInt(cw / img.width * 100)
    document.getElementById('scal2').value = scl
    scaling(scl)
}
function load_img(_url) {  // 画像の読み込み
    img.src = (_url ? _url : "https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg")
}
load_img()
function scaling(_v) {        // スライダーが変った
    v = parseInt(_v) * 0.01
    draw_canvas(ix, iy)       // 画像更新
}

function draw_canvas(_x, _y) {     // 画像更新
    const ctx = cvs.getContext('2d')
    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.fillRect(0, 0, cw, ch)    // 背景を塗る
    ctx.drawImage(img,
        0, 0, img.width, img.height,
        (cw / 2) - _x * v, (ch / 2) - _y * v, img.width * v, img.height * v,
    )
    ctx.strokeStyle = 'rgba(0, 0, 0, 1)'
    ctx.strokeRect((cw - ow) / 2, (ch - oh) / 2, ow, oh) // 赤い枠
}

function crop_img() {                // 画像切り取り
    const ctx = out.getContext('2d')
    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.fillRect(0, 0, ow, oh)    // 背景を塗る
    ctx.drawImage(img,
        0, 0, img.width, img.height,
        (ow / 2) - ix * v, (oh / 2) - iy * v, img.width * v, img.height * v,
    )
}

let mouse_down = false      // canvas ドラッグ中フラグ
let sx = 0                  // canvas ドラッグ開始位置
let sy = 0
cvs.ontouchstart =
    cvs.onmousedown = function (_ev) {     // canvas ドラッグ開始位置
        mouse_down = true
        sx = _ev.pageX
        sy = _ev.pageY
        return false // イベントを伝搬しない
    }
cvs.ontouchend =
    cvs.onmouseout =
    cvs.onmouseup = function (_ev) {       // canvas ドラッグ終了位置
        if (mouse_down == false) return
        mouse_down = false
        draw_canvas(ix += (sx - _ev.pageX) / v, iy += (sy - _ev.pageY) / v)
        return false // イベントを伝搬しない
    }
cvs.ontouchmove =
    cvs.onmousemove = function (_ev) {     // canvas ドラッグ中
        if (mouse_down == false) return
        draw_canvas(ix + (sx - _ev.pageX) / v, iy + (sy - _ev.pageY) / v)
        return false // イベントを伝搬しない
    }
cvs.onmousewheel = function (_ev) {    // canvas ホイールで拡大縮小
    let scl = parseInt(parseInt(document.getElementById('scal2').value) + _ev.wheelDelta * 0.05)
    if (scl < 10) scl = 10
    if (scl > 400) scl = 400
    document.getElementById('scal2').value = scl
    scaling(scl)
    return false // イベントを伝搬しない
}

function handleSwitch(check) {
    if (check.checked) {
        document.getElementById("iconSelect2").style.display = "block";
    } else {
        document.getElementById("iconSelect2").style.display = "none";
        document.getElementById("icon_preview").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg");
        document.getElementById("jpgIcon").value = "";
    }
}

var selectColor2 = document.getElementsByName("jpgQRColor");

selectColor2.forEach(function (selectColor) {
    selectColor.addEventListener("change", function () {
        if (selectColor.value === 'color') {
            document.getElementById("jpgColorCode").style.display = "inline-block";
        } else {
            document.getElementById("jpgColorCode").style.display = "none";
            document.getElementById("jpgColorCode").value = "#000000";
        }
    });
});

function submitQRForm() {
    crop_img();
    var outcanvas = document.getElementById("out2");
    var iconCode = document.getElementById("jpgIcon").value;
    for (i = 0; i < selectColor2.length; i++) {
        if (selectColor2[i].checked)
            var color = selectColor2[i].value;
    }
    var colorCode = document.getElementById("jpgColorCode").value;
    var alpha = document.getElementById("jpgQRAlpha").value;

    backimage = outcanvas.toDataURL("image/JPEG");

    var server_data = [
        { "backimageURL": backimage },
        { "iconCode": iconCode },
        { "url": url },
        { "color": color },
        { "colorCode": colorCode },
        { "alpha": alpha }
    ];

    $.ajax({
        type: "POST",
        url: "/jpgtest",
        data: JSON.stringify(server_data),
        contentType: "application/json",
        dataType: 'json',
        success: function (result) {
            window.location.href = result;
        }
    });
}

var filetype = document.getElementsByName("filetype");

filetype.forEach(function (selecttype) {
    selecttype.addEventListener("change", function () {
        if (selecttype.value === 'gif') {
            document.getElementById("jpgFile").style.display = "none";
            document.getElementById("gifFile").style.display = "block";
        } else {
            document.getElementById("jpgFile").style.display = "flex";
            document.getElementById("gifFile").style.display = "none";
        }
    });
});