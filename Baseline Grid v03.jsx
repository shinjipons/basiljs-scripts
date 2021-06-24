#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.strokeWeight(5);
	b.canvasMode(b.MARGIN);
	for (var i = 0; i < 10; i++) {
		var columns = b.random(2, 20);
		var stepX = b.width/columns;
		for (posX = 0; posX < b.width; posX = posX + stepX) {
			var heightDivider = b.floor(b.random(2, 20));
			var stepY = b.height / heightDivider;
			for (var posY = 0; posY < b.height; posY = posY + stepY) {
				b.line(posX, posY, posX + stepX, posY + stepY);
			}
		}
	}
}

b.go();