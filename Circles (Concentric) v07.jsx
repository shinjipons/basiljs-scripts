#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.stroke(b.color(0, 0, 0, 100));
	b.strokeWeight(4);
	var limit = 20;
	var minRadius = 1;
	var maxRadius = b.height/2;
	var centerX = b.width/2;
	var centerY = b.height/2;

	for (var i = 0; i < limit; i++) {
		var radius = b.map(i, 0, limit, maxRadius, minRadius);
		b.ellipseMode(b.RADIUS);
		var shape = b.ellipse(centerX, centerY, radius, radius);
		if (i%2 == 0) {
			b.itemX(shape, 0);
		} else {
			b.itemX(shape, b.width - 2 * radius);
		}
		centerX = b.bounds(shape).left + radius;
		centerY = b.bounds(shape).top + radius;
	}
}

b.go();