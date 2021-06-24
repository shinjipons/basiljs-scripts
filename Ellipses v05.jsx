#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.ellipseMode(b.CENTER);
	b.canvasMode(b.MARGIN);
	// this works better if it is an even number
	var gridDivider = 4;
	var stepX = b.width/gridDivider;
	var stepY = b.height/gridDivider;
	// this should work better if it is an uneven number, because it's a zero based index
	var shapeLimit = 1;
	for (var posX = 0; posX <= b.width + 1; posX = posX + stepX) {
		for (var posY = 0; posY <= b.height + 1; posY = posY + stepY) {
			for (var i = 1; i <= shapeLimit; i++) {
				b.stroke(0.25);
				b.noFill();
				var radiusMax = b.dist(posX, posY, b.width/2, b.height/2) * 2;
				var radiusMin = 0;
				var mappedRadius = b.map(i, 0, shapeLimit, radiusMin, radiusMax);
				b.ellipse(posX, posY, mappedRadius, mappedRadius);
			}
		}
	}
}

b.go();