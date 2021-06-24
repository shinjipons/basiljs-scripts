#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.colorMode(b.CMYK);
	var c1 = b.color(0, 0, 100, 0); //process cyan
	var c2 = b.color(0, 0, 0, 100); //process black
	var columns = 4;
	var rows = 4;
	var gridX = b.width/columns;
	var gridY = b.height/rows;

	for (var y = 0; y < b.height; y = y + gridY) {
		for (var x = 0; x < b.width; x = x + gridX) {
			b.noStroke();
			
			b.rect(x, y, gridX, gridY);
			var shapes = b.items(b.doc());
			
			var i = shapes.length;
			b.println(i);

			// now let's try numbering the frames other each other
			var myFrame = b.text(i, x, y, 150, 50); // there should be 16 txt frames
			b.typo(myFrame, 'pointSize', 20);
			b.typo(myFrame, 'fillColor', c1);			
		};
	};
};

b.go();