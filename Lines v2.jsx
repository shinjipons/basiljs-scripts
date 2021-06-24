#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var tileCount = 40;
	b.strokeWeight(1);

	for (var gridY = 0; gridY <= tileCount; gridY++) {
		for (var gridX = 0; gridX <= tileCount; gridX++) {
			var posX = b.width/tileCount * gridX;
			var posY = b.height/tileCount * gridY;
			b.line(posX, posY, b.width/2, b.height/2);
		}
	}
};

b.go();