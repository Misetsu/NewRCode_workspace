function autoA3() {
    document.getElementById("Height").value = "1191";
    document.getElementById("Width").value = "842";
}

function autoA4() {
    document.getElementById("Height").value = "842";
    document.getElementById("Width").value = "595";
}

function autoA5() {
    document.getElementById("Height").value = "595";
    document.getElementById("Width").value = "298";
}

function autoB4() {
    document.getElementById("Height").value = "1032";
    document.getElementById("Width").value = "729";
}
function autoB5() {
    document.getElementById("Height").value = "729";
    document.getElementById("Width").value = "516";
}
function autoCard() {
    document.getElementById("Height").value = "420";
    document.getElementById("Width").value = "283";
}

function autoRatio() {
    document.getElementById("Height").value = "500";
    document.getElementById("Width").value = "500";
}

function swapWH() {
    var w = document.getElementById("Width").value;
    document.getElementById("Width").value = document.getElementById("Height").value;
    document.getElementById("Height").value = w;
}

function reSize() {
    document.getElementById("Height").value;
    document.getElementById("Width").value;

    let div = document.getElementById("movable");
    div.style.height = parseInt(document.getElementById("Height").value) + "px";
    div.style.width = parseInt(document.getElementById("Width").value) + "px";

    canvas.setHeight(document.getElementById("movable").clientHeight);
    canvas.setWidth(document.getElementById("movable").clientWidth);
    canvas.renderAll()
}