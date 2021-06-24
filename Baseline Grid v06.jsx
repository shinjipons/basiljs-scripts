#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.strokeWeight(10);
	b.canvasMode(b.MARGIN);
	var columns = 20;
	var stepX = b.width/columns;
	var c1 = b.color(90, 20, 0, 0);
	var c2 = b.color(0, 90, 100, 0);
	for (posX = 0; posX <= b.width; posX = posX + stepX) {
		var heightDivider = b.floor(b.map(posX, 0, b.width, 1, columns));
		var stepY = b.height / heightDivider;
		for (var posY = 0; posY <= b.height; posY = posY + stepY) {
			var mapped = b.map(posY, 0, b.height, 0, 1);
			b.stroke(b.lerpColor(c1, c2, mapped));
			b.line(posX, posY, posX + stepX, posY);
		}
	}
}

b.go();