function autoA3() {
    if (document.getElementById("Height").value == "4093") {
        document.getElementById("Height").value = "5787";
        document.getElementById("Width").value = "4093";
    } else {
        document.getElementById("Height").value = "4093";
        document.getElementById("Width").value = "5787";
    }
}

function autoA4() {
    if (document.getElementById("Height").value == "2894") {
        document.getElementById("Height").value = "4093";
        document.getElementById("Width").value = "2894";
    } else {
        document.getElementById("Height").value = "2894";
        document.getElementById("Width").value = "4093";
    }
}

function autoA5() {
    if (document.getElementById("Height").value == "2039") {
        document.getElementById("Height").value = "2894";
        document.getElementById("Width").value = "2039";
    } else {
        document.getElementById("Height").value = "2039";
        document.getElementById("Width").value = "2894";
    }
}

function autoB4() {
    if (document.getElementById("Height").value == "3541") {
        document.getElementById("Height").value = "5016";
        document.getElementById("Width").value = "3541";
    } else {
        document.getElementById("Height").value = "3541";
        document.getElementById("Width").value = "5016";
    }
}
function autoB5() {
    if (document.getElementById("Height").value == "2508") {
        document.getElementById("Height").value = "3541";
        document.getElementById("Width").value = "2508";
    } else {
        document.getElementById("Height").value = "2508";
        document.getElementById("Width").value = "3541";
    }
}
function autoCard() {
    if (document.getElementById("Height").value == "1378") {
        document.getElementById("Height").value = "2039";
        document.getElementById("Width").value = "1378";
    } else {
        document.getElementById("Height").value = "1378";
        document.getElementById("Width").value = "2039";
    }
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