#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for arcs

function draw() {
	b.canvasMode(b.MARGIN);
	b.strokeWeight(1);
	b.stroke(b.color(0, 0, 0, 0));
	var rows    = 20;
	var columns = 20;
	
	for (var extreme = 200; extreme >= 0; extreme = extreme - 100) {
		var minH2 = 0;
		var maxH2 = extreme;
		var minW2 = 0;
		var maxW2 = extreme;
		
		for (var i = 0; i <= rows/2; i++) {
			// this is for the top left to right bottom swirls
			b.beginShape();
			var posYTopRight   = b.map(i, 0, rows, b.height, 0);
			var posXTopRight   = b.map(i, 0, columns, 0, b.width);
			var posYBottomLeft = b.map(i, 0, rows, b.height, b.height/2);
			var posXBottomLeft = b.map(i, 0, columns, b.width, b.width/2);
				b.vertex(0,           // x
						 0,               // y
						 0,               // x left anchor
						 0,               // y left anchor
						 posXTopRight,    // x right anchor
						 posYTopRight);   // y right anchor
				b.vertex(b.width,
						 b.height,
						 posXBottomLeft,  // this one 
						 posYBottomLeft,  // this one
						 b.width,
						 b.height);
			b.endShape();
		}
	}
}

b.go(b.MODESILENT);