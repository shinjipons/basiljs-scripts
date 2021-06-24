#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.colorMode(b.CMYK);
	var c1 = b.color(100, 0, 40, 0); //process cyan
	var c2 = b.color(0, 100, 30, 0); //process magenta

	var columns = 3;
	var rows = 3;

	var gridX = b.width/columns;
	var gridY = b.height/rows;

	for (var y = 0; y < b.height; y = y + gridY) {
		for (var x = 0; x < b.width; x = x + gridX) {
			
			b.rectMode(b.CORNER);
			b.noStroke();
			var shapes = b.rect(x, y, gridX, gridY);
			changeColor(n, i);
		};
	};

	var items = b.items( b.doc() );
	for ( var i = 0; i < items.length; i++) {
		b.println(items[i]);
	};
};

b.go(b.MODESILENT);