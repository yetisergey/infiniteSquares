var canvas;
var context;

window.onload = function () {
	canvas = document.getElementById("squares");
	context = canvas.getContext("2d");
	resizeCanvas();
	drawFrame();
}

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
	canvas.width = 500;
	canvas.height = 500;
}

var widthQuad = 50;
var heightQuad = 50;
var squarePosition = 0;

function drawFrame() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (var x = -squarePosition * widthQuad; x < canvas.width; x += widthQuad) {
		for (var y = -squarePosition * heightQuad; y < canvas.height; y += heightQuad) {
			context.strokeRect(squarePosition + x, squarePosition + y, widthQuad, heightQuad);
		}
	}
	squarePosition++;
	if (squarePosition >= 51) {
		squarePosition = 0;
	}
	setTimeout("drawFrame()", 70);
}