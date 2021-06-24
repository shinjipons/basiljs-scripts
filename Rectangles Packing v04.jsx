#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for rectangle packing

function draw() {
	b.canvasMode(b.MARGIN);
	b.rectMode(b.CORNERS);
	b.fill(b.color(0, 24, 90, 0));
	for (var i = 0; i < 100; i++) {
		var width = b.random(0, b.width);
		var height = b.random(0, b.height);
		var shape = b.rect(0, b.height, width, height);
		b.opacity(shape, 1);
	}
}

b.go();