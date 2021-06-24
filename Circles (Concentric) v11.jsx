#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var centerY = b.height/2;
	var limit = 3;
	for (var i = 0; i < limit; i++) {
		b.ellipseMode(b.RADIUS);
		b.noFill();
		b.stroke(b.color(0, 0, 0, 100));
		b.strokeWeight(2);
		var radius = b.map(i, 0, limit, b.height/2, 1);

		if (i%2 == 0) {
			var centerX = b.bounds(shapes).right - 2 * radius;
		} else {
			var centerX = b.bounds(shapes).left - 2 * radius;
		}
	var shapes = b.ellipse(centerX, centerY, radius, radius);
	}
}

b.go();