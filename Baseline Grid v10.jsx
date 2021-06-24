#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {	
	b.canvasMode(b.MARGIN);
	var columns = 5;
	var stepX = b.width/columns;

	for (var i = 1; i < columns + 1; i++) {
		var posX = b.map(i, 1, columns + 1, 0, b.width);
		var rows = b.height/i;
		var stepY = b.height/rows;
		for (var posY = 0; posY < b.height; posY = posY + stepY) {
			b.line(posX, posY, posX + stepX, posY);
		}
	}
}

b.go();