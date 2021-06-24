#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for arcs

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.stroke(b.color(0, 0, 0, 100));
	b.strokeWeight(1);
	b.beginShape();
		// left point
		b.vertex(0,
				 b.height/2,
				 0,
				 b.height/2,
				 0,
				 0);

		// right point
		b.vertex(b.width, 
				 b.height/2,
				 b.width,
				 b.height,
				 b.width,
				 b.height/2);
	b.endShape();
}

b.go();