#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var posX = b.width/2;
	var posY = b.height/2;
	var limit = 23;
	var radiusMin = 30;
	var radiusMax = 300;
	for (var i = 0; i <= limit; i++) {
		b.ellipseMode(b.CENTER);
		var radiusMapped = b.map(i, 0, limit, radiusMin, radiusMax);
		b.strokeWeight(0.25);
		b.stroke(b.color(0, 0, 0, 100));
		b.noFill();
		b.ellipse(posX, posY, radiusMapped, radiusMapped);
	}
}

b.go();