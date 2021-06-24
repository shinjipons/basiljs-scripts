#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var tileCount = 5;
	var limit = 5;
	b.strokeWeight(1);

	for (var gridY = 0; gridY <= tileCount; gridY++) {
		for (var gridX = 0; gridX <= tileCount; gridX++) {
			for (var i = 0; i < limit; i++) {
				var posX = b.width/tileCount * gridX;
				var posY = b.height/tileCount * gridY;
				b.ellipseMode(b.CENTER);
				var radiusMax = b.dist(b.width/2, b.height/2, posX, posY) * 2;
				var mappedRadius = b.map(i, 0, limit, 0, radiusMax);
				b.noFill();
				b.ellipse(posX, posY, mappedRadius, mappedRadius);
			}
		}
	}
};

b.go();