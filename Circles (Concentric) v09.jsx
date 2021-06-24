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
		b.ellipseMode(b.RADIUS);
		var radius = b.map(i, 0, limit, maxRadius, minRadius);
		var ellipses = b.ellipse(centerX, centerY, radius, radius);
	}
}

b.go();