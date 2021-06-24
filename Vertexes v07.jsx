#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for arcs

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.strokeWeight(1);
	b.stroke(b.color(0, 0, 0, 100));
	var rows    = 200;
	var columns = 200;
	var extreme = 5000;
	var minH = b.height/2 - extreme;
	var maxH = b.height/2 + extreme;
	var minW = b.width/2 - extreme;
	var maxW = b.width/2 + extreme;
	
	for (var i = 0; i <= rows; i++) {
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

b.go(b.MODESILENT);