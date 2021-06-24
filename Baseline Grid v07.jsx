#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var columns = 10;
	var stepX = b.width/columns;
	var c1 = b.color(34, 0, 100, 0);
	var c2 = b.color(0, 90, 100, 0);
	for (var posX = 0; posX < b.width; posX = posX + stepX) {
		var rows = b.map(posX, 0, b.width, 2, 20);
		var stepY = b.height/rows;
		for (var posY = 0; posY < b.height; posY = posY + stepY) {
			b.line(posX, posY, posX + stepX, posY);
		}
	}
}

b.go();