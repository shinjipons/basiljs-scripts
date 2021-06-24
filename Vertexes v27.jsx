#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for arcs

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.strokeWeight(1);
	b.stroke(b.color(0, 0, 0, 100));
	var detail = 100;
	var XLimit = b.width;  // default value is b.width
	var YLimit = b.height; // default value is b.height

	var maxDistance = b.dist(0, 0, b.width/2, b.height/2);

	for (var i = 0; i <= detail; i++) {

		// this is for the top left to right bottom swirls

		var posYTopLeft     = b.map(i, 0, detail, YLimit, 0);
		var posXTopLeft     = b.map(i, 0, detail, 0     , XLimit);
		var posYBottomRight = b.map(i, 0, detail, YLimit, 0);
		var posXBottomRight = b.map(i, 0, detail, 0     , XLimit);

		var distance = b.dist(posXTopLeft, posYTopLeft, b.width/2, b.height/2);
		var weightValue = b.map(distance, 0, maxDistance, 10, 0.001);
		b.strokeWeight(weightValue);

		b.beginShape();
			b.vertex(0,
					 0,
					 0,
					 0,
					 posXTopLeft,
					 posYTopLeft);
			b.vertex(b.width,
					 b.height,
					 b.width,
					 b.height,
					 posXBottomRight,
					 posYBottomRight);
		b.endShape();

		// this is for the bottom left to top right swirls

		var posYTopRight   = b.map(i, 0, detail, YLimit, 0);
		var posXTopRight   = b.map(i, 0, detail, XLimit, 0);
		var posYBottomLeft = b.map(i, 0, detail, YLimit, 0);
		var posXBottomLeft = b.map(i, 0, detail, XLimit, 0);

		b.beginShape();
			b.vertex(0,
					 b.height,
					 0,
					 b.height,
					 posXBottomLeft,
					 posYBottomLeft);
			b.vertex(b.width,
					 0,    
					 b.width,
					 0,
					 posXTopRight,    
					 posYTopRight);
		b.endShape();
	}	
}

b.go(b.MODESILENT);