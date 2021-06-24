#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.ellipseMode(b.CENTER);
	b.canvasMode(b.MARGIN);
	var limit = 3;
	var gridDivider = 3;
	var stepX = b.width/gridDivider;
	var stepY = b.height/gridDivider;
	var radiusMin = 0;
	for (var posX = 0; posX <= b.width + 1; posX = posX + stepX) {
		for (var posY = 0; posY <= b.height + 1; posY = posY + stepY) {
			b.stroke(b.color(0, 0, 0, 100));
			b.strokeWeight(1);
			b.noFill();
			var radiusMax = b.dist(posX, posY, b.width/2, b.height/2) * 2;
			var mappedRadius = b.map(i, 0, limit - 1, radiusMin, radiusMax);
			b.ellipse(posX, posY, radiusMax, radiusMax);
		}
	}
}

b.go();