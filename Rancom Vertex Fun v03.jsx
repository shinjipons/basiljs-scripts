#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var limit = 300;
	b.noFill();
	b.beginShape()
	for (var i = 0; i < limit; i++) {
		var posX = b.random(0, b.width);
		var posY = b.random(0, b.height);
		var xLeftAnchor = b.random(0, b.width);
		var yLeftAnchor = b.random(0, b.height);
		var xRightAnchor = b.random(0, b.width);
		var yRightAnchor = b.random(0, b.height);
		b.vertex(posX, posY, xLeftAnchor, yLeftAnchor, xRightAnchor, yRightAnchor);
	}
	b.endShape();
}

b.go();