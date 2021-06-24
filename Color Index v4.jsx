#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var columns = 10;
	var rows = 10;
	var gridX = b.width/columns;
	var gridY = b.height/rows;

	b.stroke(b.color(0, 0, 0, 0));
	b.strokeWeight(20);
	b.rectMode(b.CORNER);

	// for (var i = 1; i <= 20; i++) {
		for (var y = 0; y <= b.height; y = y + gridY) {
			for (var x = 0; x <= b.width; x = x + gridX) {
				// b.page(i); 
				var cValue = b.map(i, 1, 20, 0, 100);
				var mValue = b.map(x, 0, b.width, 0, 100);
				var yValue = b.map(y, 0, b.height, 0, 100);
				var kValue = 0;
				b.fill(b.color(cValue, mValue, yValue, kValue));
				b.rect(x, y, gridX, gridY);
			};
		};
	// };
};

b.go();