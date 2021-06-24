#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var limit = 40;
	var posXMin = b.width * 0.3;
	var posXMax = b.width * 0.7;
	var posYMin = b.height * 0.7;
	var posYMax = b.height * 0.2;

	for (var i = 0; i < limit; i++) {
		b.textFont("Modulo 30\tRounded");
		b.textSize(42);
		b.noFill();

		var posX = b.map(i, 0, limit, posXMin, posXMax);
		var posY = b.map(i, 0, limit, posYMin, posYMax);
		var myFrame = b.text("repetition", posX, posY, 500, 500);
		b.typo(myFrame, 'strokeColor', b.color(0, 0, 0, 100));
	}
}

b.go();