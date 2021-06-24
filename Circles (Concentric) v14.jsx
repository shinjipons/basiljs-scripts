#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.stroke(b.color(0, 0, 0, 100));
	b.strokeWeight(1);
	var limit = 100;
	var minRadius = 0.1;
	var maxRadius = b.height * 10;
	for (var i = 0; i < limit; i++) {
		b.ellipseMode(b.RADIUS);
		var radius = b.map(i, 0, limit, maxRadius, minRadius);
		var shapes = b.ellipse(b.width/2, b.height/2, radius, radius);
		b.itemX(shapes, 0);
	}
}

b.go();