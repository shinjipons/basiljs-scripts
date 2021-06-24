#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noStroke();
	var limit = 10;
	var minRadius = 0.1;
	var maxRadius = b.height * 10;
	for (var i = 0; i < limit; i++) {
		var mapped = b.map(i, 0, limit, 100, 0)
		b.fill(b.color(0, 0, 0, mapped));
		b.ellipseMode(b.RADIUS);
		var radius = b.map(i, 0, limit, maxRadius, minRadius);
		var shapes = b.ellipse(b.width/2, b.height/2, radius, radius);
		b.itemX(shapes, 0);
	}
}

b.go();