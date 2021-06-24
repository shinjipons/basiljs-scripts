#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.ellipseMode(b.CENTER);
	b.canvasMode(b.MARGIN);
	// this works better if it is an even number
	var gridDivider = 4;
	var stepX = b.width/gridDivider;
	var stepY = b.height/gridDivider;
	var shapeLimit = 10;
	for (var posX = 0; posX <= b.width + 1; posX = posX + stepX) {
		for (var posY = 0; posY <= b.height + 1; posY = posY + stepY) {
			for (var i = 0; i < shapeLimit; i++) {
	 			b.stroke(0.25);
				b.noFill();
				var mappedX = b.map(i, 0, shapeLimit, 0, stepX * 2);
				var mappedY = b.map(i, 0, shapeLimit, 0, stepY * 2);
				b.ellipse(posX, posY, mappedX, mappedY);
			}
		}
	}
}

b.go();