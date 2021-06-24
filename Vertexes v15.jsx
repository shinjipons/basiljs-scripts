#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for arcs

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.strokeWeight(3);
	b.stroke(b.color(0, 0, 0, 100));
	var detail = 200;

	for (var i = 0; i <= detail; i++) {
		// this is for the top left to right bottom swirls
		b.beginShape();
		var posYTopLeft   = b.map(i, 0, detail, b.height, 0);
		var posXTopLeft   = b.map(i, 0, detail, 0, b.width);
		var posYBottomRight = b.map(i, 0, detail, b.height, 0);
		var posXBottomRight = b.map(i, 0, detail, 0, b.width);
			b.vertex(0,           // x
					 0,               // y
					 0,               // x left anchor
					 0,               // y left anchor
					 posXTopLeft,     // x right anchor
					 posYTopLeft);    // y right anchor
			b.vertex(b.width,
					 b.height,
					 posXBottomRight, // this one 
					 posYBottomRight, // this one
					 b.width,
					 b.height);
		b.endShape();
	}

	for (var i = 0; i <= detail; i++) {
		// this is for the bottom left to top right swirls
		b.beginShape();
		var posYTopRight   = b.map(i, 0, detail, b.height, 0);
		var posXTopRight   = b.map(i, 0, detail, b.width, 0);
		var posYBottomLeft = b.map(i, 0, detail, b.height, 0);
		var posXBottomLeft = b.map(i, 0, detail, b.width, 0);
			b.vertex(0,             // x
					 b.height,          // y
					 0,                 // x left anchor
					 b.height,          // y left anchor
					 posXBottomLeft,    // x right anchor
					 posYBottomLeft);   // y right anchor
			b.vertex(b.width,
					 0,
					 posXTopRight,    
					 posYTopRight,    
					 b.width,
					 0);
		b.endShape();
	}
}

b.go(b.MODESILENT);