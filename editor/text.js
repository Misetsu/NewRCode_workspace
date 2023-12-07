function setStyle(object, styleName, value) {
    if (object.setSelectionStyles && object.isEditing) {
        var style = { };
        style[styleName] = value;
        object.setSelectionStyles(style);
    }
    else {
        object[styleName] = value;
    }
  }

function getStyle(object, styleName) {
    return (object.getSelectionStyles && object.isEditing)
        ? object.getSelectionStyles()[styleName]
        : object[styleName];
  }

  
function addText(){
	var itext = new fabric.IText('テキストボックス', {
		left: 100,
		top: 100,
		fill: '#000000',
        fontSize: 20,
        padding: 8
	});
    
    canvas.add(itext);
    canvas.setActiveObject(iText);
    canvas.requestRenderAll();
}

function boldText() {
    var activeObject = canvas.getActiveObject();
    if (activeObject.type === 'i-text') {
        var isBold = getStyle(activeObject, 'fontWeight') === 'bold';
        setStyle(activeObject, 'fontWeight', isBold ? 'normal' : 'bold');
        activeObject.dirty = true;
        
        canvas.renderAll();
    }
}

function italicText() {
    var activeObject = canvas.getActiveObject();
    if (activeObject.type === 'i-text') {
        var isItalic = getStyle(activeObject, 'fontStyle') === 'italic';
        setStyle(activeObject, 'fontStyle', isItalic ? '' : 'italic');
        activeObject.dirty = true;

        canvas.renderAll();
    }
}

function underlineText() {
    var activeObject = canvas.getActiveObject();
    if (activeObject.type === 'i-text') {
        var isUnderline = (getStyle(activeObject, 'underline') || false);
        setStyle(activeObject, 'underline', isUnderline ? false : true);
        activeObject.dirty = true;

        canvas.renderAll();
    }
}

function slashText() {
    var activeObject = canvas.getActiveObject();
    if (activeObject.type === 'i-text') {
        var islinethrough = (getStyle(activeObject, 'linethrough') || false);
        setStyle(activeObject, 'linethrough', islinethrough ? false : true);
        activeObject.dirty = true;
        
        canvas.renderAll();
    }
}