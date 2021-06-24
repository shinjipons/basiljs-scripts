#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for arcs

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.stroke(b.color(0, 0, 0, 100));
	b.strokeWeight(1);
	var limit = 10;
	for (var i = 0; i < limit; i++) {

		// var xAnchorRight1 = b.map(i, 0, limit, 0, 0);
		var yAnchorRight1 = b.map(i, 0, limit, b.height, 0);

		// var xAnchorRight2 = b.map(i, 0, limit, b.width, b.width);
		var yAnchorRight2 = b.map(i, 0, limit, b.height, 0);

		b.beginShape();
			// left point
			b.vertex(0,
					 b.height/2,
					 0,
					 b.height/2,
					 0,
					 yAnchorRight1);

			// right point
			b.vertex(b.width, 
					 b.height/2,
					 b.width,
					 b.height/2,
					 b.width,
					 yAnchorRight2);
		b.endShape();
	}
}

b.go();