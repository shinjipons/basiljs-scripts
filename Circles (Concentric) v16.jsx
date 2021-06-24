#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.stroke(b.color(0, 0, 0, 100));
	b.strokeWeight(1);
	b.ellipseMode(b.RADIUS);

	var limit = 4;
	var radiusMax = b.height/2;
	var radiusMin = 1;
	centerX = b.width/2;
	centerY = b.height/2;
	var myArray = [b.height/2];

	for (var i = 0; i < limit; i++) {
		var radius = myArray[myArray.length];
		b.ellipse(centerX, centerY, radius, radius);

		// append new value to the array
		myArray.push(1000);
	}
}

b.go();