#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	
	// create new random RGB color
	var newRandomColor = b.color( b.random(255), b.random(255), b.random(255) );

	// fill rect with it
	b.fill( newRandomColor );
	b.rect(0,0,b.width,b.height);
}

b.go();