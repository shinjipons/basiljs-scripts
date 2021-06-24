#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for arcs

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.strokeWeight(1);
	b.stroke(b.color(0, 0, 0, 100));
	var rows = 30;
	
	for (var i = 0; i <= rows; i++) {
		b.beginShape();
		var posY = b.map(i, 0, rows, 0, b.height/2);
		var posYMapped = b.map(i, 0, rows, b.height, b.height/2);
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
}

b.go(b.MODESILENT);