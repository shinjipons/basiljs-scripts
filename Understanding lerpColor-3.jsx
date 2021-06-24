#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.units(b.PT);
	b.colorMode(b.CMYK);
	var c1 = b.color(100, 0, 0, 0); //process cyan
	var c2 = b.color(0, 100, 0, 0); //process magenta

	var w = b.width/10;
	var h = b.height/10;

	for (var y = 0; y < b.height; y = y + h) {
		for (var x = 0; x < b.width; x = x + w) {
				b.rectMode(b.CORNER);
				b.noStroke();
				var loc = x + y * b.width;
				var maxLoc = 400000;
				var colorInterpolation = b.map(loc, 0, maxLoc, 0, 1);
				b.fill( b.lerpColor(c1, c2, colorInterpolation) );
				b.rect(x, y, w, h);
		};
	};
};

b.go();
