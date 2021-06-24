#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.colorMode(b.CMYK);
	b.canvasMode(b.MARGIN);
	b.stroke(b.color(0, 0, 0, 0));
	b.strokeWeight(20);
	b.rectMode(b.CORNER);

	var columns = 10;
	var rows = 10;
	var gridX = b.width/columns;
	var gridY = b.height/rows;
	var cValue = 5;
	var mValue = b.map(x, 0, b.width, 0, 100);
	var yValue = b.map(y, 0, b.height, 0, 100);
	var kValue = 0;

	for (var y = 0; y <= b.height; y = y + gridY) {
		for (var x = 0; x <= b.width; x = x + gridX) {
			b.fill(b.color(cValue, mValue, yValue, kValue));
			b.rect(x, y, gridX, gridY);
		};
	};
};

b.go();