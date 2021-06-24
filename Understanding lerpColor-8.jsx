#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.units(b.PT);
	b.colorMode(b.CMYK);
	var c1 = b.color(0, 0, 0, 0); //process cyan
	var c2 = b.color(0, 0, 0, 100); //process black

	var columns = 4;
	var rows = 4;

	var gridX = b.width/columns;
	var gridY = b.height/rows;

	for (var y = 0; y < b.height; y = y + gridY) {
		for (var x = 0; x < b.width; x = x + gridX) {

			b.rectMode(b.CORNER);
			b.noFill();
			b.noStroke();
			b.rect(x, y, gridX, gridY);
			var shapes = b.items( b.doc() );

			for ( var i = 0; i < shapes.index; i++) {
				progress = b.map(i, 0, shapes.index, 0, 1);
				b.fill( b.lerpColor(c1, c2, progress));
			};
		};
	};
};

b.go();