#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for arcs

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.strokeWeight(0.1);
	b.stroke(b.color(0, 0, 0, 100));
	var detail = 200;
	var XLimit = b.width;  // default value is b.width
	var YLimit = b.height; // default value is b.height
	var c1 = b.color(80,  0, 100, 0);
	var c2 = b.color(32, 92, 100, 0);

	for (var i = 0; i <= detail; i++) {

		// this is for the top left to right bottom swirls
		var mapped1 = b.map(i, 0, detail, 4  , 0.1);
		var mapped2 = b.map(mapped1, 4, 0.1, 0.1, 4);

		b.stroke(b.lerpColor(c1, c2, i / detail));
		b.strokeWeight(mapped1);

		var posYTopLeft   =   b.map(i, 0, detail, YLimit, 0);
		var posXTopLeft   =   b.map(i, 0, detail, 0     , XLimit);
		var posYBottomRight = b.map(i, 0, detail, YLimit, 0);
		var posXBottomRight = b.map(i, 0, detail, 0     , XLimit);

		b.beginShape();
			b.vertex(0,
					 0,
					 0,
					 0,
					 posXTopLeft,
					 posYTopLeft);
			b.vertex(b.width,
					 b.height,
					 posXBottomRight,
					 posYBottomRight,
					 b.width,
					 b.height);
		b.endShape();

		// this is for the bottom left to top right swirls
		b.strokeWeight(mapped2);

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
					 posXTopRight,    
					 posYTopRight,    
					 b.width,
					 0);
		b.endShape();
	}	
}

b.go(b.MODESILENT);