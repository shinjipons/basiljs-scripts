#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for arcs

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.strokeWeight(0.2);
	b.stroke(b.color(0, 0, 0, 100));
	var rows    = 20;
	var columns = 20;
	
	for (var extreme = 200; extreme >= 0; extreme = extreme - 100) {
		var minH = b.height/2 - extreme;
		var maxH = b.height/2 + extreme;
		var minW = b.width/2 - extreme;
		var maxW = b.width/2 + extreme;

		for (var i = 0; i <= rows; i++) {
			// this is for the vertical swirls
			b.beginShape();
			var posY       = b.map(i, 0, rows, minH, maxH);
			var posYMapped = b.map(i, 0, rows, maxH, minH);
				b.vertex(0,
						 b.height/2, 
						 0, 
						 b.height/2,
						 0,
						 posY);
				b.vertex(b.width,
						 b.height/2,
						 b.width,
						 posYMapped,
						 b.width,
						 b.height/2);
			b.endShape();
		}
		
		for (var i = 0; i <= columns; i++) {
			// this is for the horizontal swirls
			b.beginShape();
			var posX       = b.map(i, 0, columns, minW, maxW);
			var posXMapped = b.map(i, 0, columns, maxW, minW);
				b.vertex(b.width/2,
						 0, 
						 b.width/2, 
						 0,
						 posX,
						 0);
				b.vertex(b.width/2,
						 b.height,
						 posXMapped,
						 b.height,
						 b.width/2,
						 b.height);
			b.endShape();
		}
	}
}

b.go(b.MODESILENT);