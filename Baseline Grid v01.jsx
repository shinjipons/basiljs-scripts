#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var columns = b.random(2, 10);
	var stepX = b.width/columns;
	for (var i = 0; i < columns; i++) {
		var heightDivider = b.floor(b.random(2, 20));
		var stepY = b.height / heightDivider;
		for (var j = 0; j < heightDivider; i++) {
			var posX = stepX * i;
			var posY = stepY * j;
			b.line(0, 0, posX, posY);
		}
	}
}

b.go();