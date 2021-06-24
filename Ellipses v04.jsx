#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.ellipseMode(b.CENTER);
	b.canvasMode(b.MARGIN);
	// this works better if it is an even number
	var gridDivider = 2;
	var stepX = b.width/gridDivider;
	var stepY = b.height/gridDivider;
	// this should work better if it is an uneven number, because it's a zero based index
	var shapeLimit = 2;
	for (var posX = 0; posX <= b.width + 1; posX = posX + stepX) {
		for (var posY = 0; posY <= b.height + 1; posY = posY + stepY) {
			for (var i = 0; i <= shapeLimit; i++) {
	 			b.stroke(0.25);
				b.noFill();
				var radiusMin = 0;
				var radiusMax = b.sqrt( (b.sq(b.width) + b.sq(b.height) / 4) - b.sq(posX) );
				var mappedRadius = b.map(i, 0, shapeLimit, radiusMin, radiusMax);
				b.ellipse(posX, posY, mappedRadius, mappedRadius);
			}
		}
	}
}

b.go();