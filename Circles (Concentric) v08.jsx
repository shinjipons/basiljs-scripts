#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.stroke(b.color(0, 0, 0, 100));
	b.strokeWeight(4);
	var limit = 4;
	var minRadius = 1;
	var maxRadius = b.height/2;
	var centerX = b.width/2;
	var centerY = b.height/2;

	for (var i = 0; i < limit; i++) {
		var radius = b.map(i, 0, limit, maxRadius, minRadius);
		b.ellipseMode(b.RADIUS);
		var shape = b.ellipse(centerX, centerY, radius, radius);
		if (i%2 == 0) {
			// code below is rught but needs different variables
			// b.itemX(shape, 0);
			b.itemX(shape, b.bounds(shape).left);
		} else {
			// if i is uneven which is what I need to manipulate
			// code below does not move circle far enought to the right
			b.itemX(shape, b.bounds(shape).right - radius);
		}
		centerX = b.bounds(shape).left + radius;
		centerY = b.bounds(shape).top + radius;
	}
}

b.go();