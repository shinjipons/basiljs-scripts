#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.stroke(b.color(0, 0, 0, 100));
	b.strokeWeight(0.3);
	var limit = 30;

	for (i = 0; i < limit; i++) {
		if (i%2 == 0) {
			b.fill(b.color(0, 0, 0, 100));
			var radius = b.map(i, 0, limit, b.height, 1);
			var shapes = b.ellipse(b.width/2, 0, radius, radius);
			b.itemX(shapes, b.width/2);
			b.itemY(shapes, 0);
		} else {
			b.fill(b.color(0, 0, 0, 0));
			var radius = b.map(i, 0, limit, b.height, 1);
			var shapes = b.ellipse(b.width/2, 0, radius, radius);
			b.itemX(shapes, b.width/2);
			b.itemY(shapes, 0);
		}
	}
}

b.go();