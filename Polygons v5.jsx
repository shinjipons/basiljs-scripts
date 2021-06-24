#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var columns = 10;
	var rows = 50;
	var stepX = b.width/columns;
	var stepY = b.height/rows;

	for (var posX = 0; posX <= b.width; posX = posX + stepX) {
		for (var posY = 0; posY <= b.height; posY = posY + stepY) {
			b.rectMode(b.CENTER);
			b.fill(b.color(0, 0, 0, 100));
			var rectWidth = b.sin(b.radians(posY/2)) * 1000;
			var rectangle = b.rect(posX, posY, rectWidth, 100);
			b.opacity(rectangle, 1);
		}
	}
}

b.go();