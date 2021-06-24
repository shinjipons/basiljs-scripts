#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.colorMode(b.CMYK);	
	b.canvasMode(b.MARGIN);

	var white = b.color(0, 0, 0, 0); 
	var black = b.color(0, 0, 0, 100); 
	var yellow = b.color(0, 0, 100, 0)
	var columns = 10;
	var rows = 10;
	var gridX = b.width/columns;
	var gridY = b.height/rows;

	for (var y = 0; y < b.height; y = y + gridY) {
		for (var x = 0; x < b.width; x = x + gridX) {
			b.stroke(white);
			b.strokeWeight(20);
			b.fill( b.lerpColor(yellow, black, ( i + 1) / (rows * columns) ) );
			b.rect(x, y, gridX, gridY);
		};
	};
};

b.go(b.SILENTMODE);