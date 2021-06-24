#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.colorMode(b.CMYK);
	var c1 = b.color(100, 0, 0, 0); //process cyan
	var c2 = b.color(0, 100, 0, 0); //process magenta

	var w = b.width/10;
	var h = b.height/10;

	for (var y = 0; y < b.height; y = y + h) {
		for (var x = 0; x < b.width; x = x + w) {
			b.rectMode(b.CORNER);
			b.noStroke();
			b.fill(c1);
			b.rect(x, y, w, h);					
		};
	};
};

b.go();