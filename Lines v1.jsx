#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var columns = 4;
	var stepX = b.width/columns;
	var rows = 4;
	var stepY = b.height/rows;

	for (var posX = 0; posX <= b.width; posX = posX + stepX) {
		b.strokeWeight(1);
		b.line(posX, 0, posX, b.height);
	}

	for (var posY = 0; posY <= b.height; posY = posY + stepY) {
		b.strokeWeight(1);
		b.line(0, posY, b.width, posY);
	}
}

b.go();