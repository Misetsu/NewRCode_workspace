let circle_fill = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg>';
let circle = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>';
let square_fill = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path  d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path></svg>';
let square = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path></svg>';

var shape1 = document.querySelector("#shape1");
var shape2 = document.querySelector("#shape2");
var shape3 = document.querySelector("#shape3");
var shape4 = document.querySelector("#shape4");

shape1.addEventListener("click", addShape1);
shape2.addEventListener("click", addShape2);
shape3.addEventListener("click", addShape3);
shape4.addEventListener("click", addShape4);

var shapeRGB = document.getElementById("shapeColor").value;

function addShape(svg) {
    var path = fabric.loadSVGFromString(svg, function(objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        obj.set({
            left: 100,
            top: 100
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

function addShape1(){
    var svg = circle_fill;
    addShape(svg);
}

function addShape2(){
    var svg = circle;
    addShape(svg);
}

function addShape3(){
    var svg = square_fill;
    addShape(svg);
}

function addShape4(){
    var svg = square;
    addShape(svg);
}

document.getElementById("shapeColor").onchange = function() {
    shapeRGB = this.value;
    var activeObject = canvas.getActiveObject();
    if (activeObject.type === 'path') {
        changeColor(activeObject, shapeRGB);
    }
  }