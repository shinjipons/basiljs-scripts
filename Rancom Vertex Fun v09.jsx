#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var limit = 100;
	var columns = 10;
	var stepX = b.width/columns;

	b.beginShape();
	for (var i = 0; i < limit; i++) {
		if (i%2 == 0) {
			var posX = b.random(stepX * i, stepX * (i + 1));
			var posY = b.random(0, b.height);
			var xLeftAnchor = b.random(stepX * i, stepX * (i + 1));
			var yLeftAnchor = b.random(0, b.height);
			var xRightAnchor = b.random(stepX * i, stepX * (i + 1));
			var yRightAnchor = b.random(0, b.height);
				b.vertex(posX, posY, xLeftAnchor, yLeftAnchor, xRightAnchor, yRightAnchor);
		}
	}
	b.endShape();
}

b.go();