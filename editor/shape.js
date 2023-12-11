let circle = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg>';
let square = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path  d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path></svg>';
let rectangle = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path d="M3 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44772 4 3 4Z"></path></svg>';
let triangle = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017Z"></path></svg>';

var shape1 = document.querySelector("#shape1");
var shape2 = document.querySelector("#shape2");
var shape3 = document.querySelector("#shape3");
var shape4 = document.querySelector("#shape4");

shape1.addEventListener("click", addShape1);
shape2.addEventListener("click", addShape2);
shape3.addEventListener("click", addShape3);
shape4.addEventListener("click", addShape4);

var shapeRGB = document.getElementById("shapeColor").value;
var shapeBorderRGB;
var shapeBorderWidth;

function addShape(svg) {
    var path = fabric.loadSVGFromString(svg, function(objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        obj.set({
            left: 100,
            top: 100,
            fill: "transparent",
            stroke: "black",
            strokeWidth: 2,
            type: "svg"
        });
        canvas.add(obj).renderAll();
    });
}

function changeColor(obj, color) {
    obj.set({
        fill: color
    });

    canvas.renderAll();
}

function changeBorderColor(obj, color) {
    obj.set({
        stroke: color
    });

    canvas.renderAll();
}

function changeBorderWidth(obj, width) {
    obj.set({
        strokeWidth: parseFloat(width)
    });

    canvas.renderAll();
}

function addShape1(){
    var svg = circle;
    addShape(svg);
}

function addShape2(){
    var svg = square;
    addShape(svg);
}

function addShape3(){
    var svg = rectangle;
    addShape(svg);
}

function addShape4(){
    var svg = triangle;
    addShape(svg);
}

document.getElementById("shapeColor").onchange = function() {
    shapeRGB = this.value;
    document.getElementById("shapeTransparent").checked = false;
    var activeObject = canvas.getActiveObject();
    if (activeObject.type === "svg") {
        changeColor(activeObject, shapeRGB);
        canvas.trigger('object:modified');
    }
}

document.getElementById("shapeBorderColor").onchange = function() {
    shapeBorderRGB = this.value;
    var activeObject = canvas.getActiveObject();
    if (activeObject.type === "svg") {
        changeBorderColor(activeObject, shapeBorderRGB);
        canvas.trigger('object:modified');
    }
}

document.getElementById("shapeBorderWidth").onchange = function() {
    shapeBorderWidth = this.value;
    var activeObject = canvas.getActiveObject();
    if (activeObject.type === "svg") {
        changeBorderWidth(activeObject, shapeBorderWidth);
        canvas.trigger('object:modified');
    }
}

document.getElementById('shapeTransparent').addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        var activeObject = canvas.getActiveObject();
        if (activeObject.type === "svg") {
            changeColor(activeObject, "transparent");
            canvas.trigger('object:modified');
        }
    } else {
        var activeObject = canvas.getActiveObject();
        if (activeObject.type === "svg") {
            changeColor(activeObject, shapeRGB);
            canvas.trigger('object:modified');
        }
    }
})