#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.colorMode(b.CMYK);
	var c1 = b.color(100, 0, 0, 0); //process cyan
	var c2 = b.color(0, 100, 0, 0); //process magenta

	var gridX = b.width/20;
	var gridY = b.height/20;

	for (var y = 0; y < b.height; y = y + gridY) {
		for (var x = 0; x < b.width; x = x + gridX) {
			b.rectMode(b.CORNER);
			b.noStroke();
			var loc = (x * b.height + y * b.width) / 2;
			var maxLoc = 400000;
			var coefficient = b.map(loc, 0, maxLoc, 0, 1);
			b.fill( b.lerpColor(c1, c2, coefficient) );
			var shapes = b.rect(x, y, gridX, gridY);
			b.isArray(shapes);
		};
	};
};

b.go(b.MODESILENT);