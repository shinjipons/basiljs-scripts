#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.colorMode(b.CMYK);
	var c1 = b.color(7, 45, 88, 0); 
	var c2 = b.color(85, 71, 0, 0); 
	var columns = 5;
	var rows = 5;
	var gridX = b.width/columns;
	var gridY = b.height/rows;

	for (var y = 0; y < b.height; y = y + gridY) {
		for (var x = 0; x < b.width; x = x + gridX) {
			b.noStroke();
			b.fill( b.lerpColor(c1, c2, i / (rows * columns)) );
			b.rect(x, y, gridX, gridY);
			var shapes = b.items(b.doc());
			var i = shapes.length;		
		};
	};
};

b.go();