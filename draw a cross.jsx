#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.stroke(100);
	b.strokeWeight(5);
	// draw a cross 
	b.line(0,0,b.width,b.height);
	b.line(0,b.height,b.width,0);
}

b.go();