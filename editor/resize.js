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

function swapWH() {
    var w = document.getElementById("Width").value;
    document.getElementById("Width").value = document.getElementById("Height").value;
    document.getElementById("Height").value = w;
}

function reSize() {
    document.getElementById("Height").value;
    document.getElementById("Width").value;
    let canvas1 = document.querySelector('#canvas');
    canvas1.height = parseInt(document.getElementById("Height").value);
    canvas1.width = parseInt(document.getElementById("Width").value);
    canvas1.style.height = parseInt(document.getElementById("Height").value) + "px";
    canvas1.style.width = parseInt(document.getElementById("Width").value) + "px";

    let canvas2 = document.querySelector('.upper-canvas');
    canvas2.height = parseInt(document.getElementById("Height").value);
    canvas2.width = parseInt(document.getElementById("Width").value);
    canvas2.style.height = parseInt(document.getElementById("Height").value) + "px";
    canvas2.style.width = parseInt(document.getElementById("Width").value) + "px";
}