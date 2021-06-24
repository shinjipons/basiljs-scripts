#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.ellipseMode(b.CENTER);
	b.canvasMode(b.MARGIN);
	var gridDivider = 5;
	var stepX = b.width/gridDivider;
	var stepY = b.height/gridDivider;
	for (var posX = 0; posX <= b.width + 1; posX = posX + stepX) {
		for (var posY = 0; posY <= b.height + 1; posY = posY + stepY) {
			b.stroke(0.25);
			b.noFill();
			var radiusMax = b.dist(posX, posY, b.width/2, b.height/2) * 2;
			b.ellipse(posX, posY, radiusMax, radiusMax);
		}
	}
}

b.go();