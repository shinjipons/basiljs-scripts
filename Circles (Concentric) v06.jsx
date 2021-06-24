#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.stroke(b.color(0, 0, 0, 100));
	b.strokeWeight(4);
	var limit = 40;
	var minRadius = 1;
	var maxRadius = b.height/2;

	for (var i = 0; i < limit; i++) {
		var radius = b.map(i, 0, limit, maxRadius, minRadius);
		b.ellipseMode(b.RADIUS);
		var shapes = b.ellipse(b.width/2, b.height/2, radius, radius);
		if (i%2 == 0) {
			b.itemX(shapes, 0);
		} else {
			b.itemX(shapes, b.width - radius * 2);
		}
	}
}

b.go();