const canvascontainer1 = document.getElementById('canvas');
const canvascontainer2 = document.querySelector('.upper-canvas');
const zoomSlider = document.getElementById('zoom-slidebar');

zoomSlider.addEventListener('input', function () {
    const sliderScale = zoomSlider.value;
    canvascontainer1.style.transform = `scale(${sliderScale})`;
    canvascontainer2.style.transform = `scale(${sliderScale})`;
});
