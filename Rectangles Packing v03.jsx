#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for rectangle packing

function draw() {
	b.canvasMode(b.MARGIN);
	b.rectMode(b.CORNER);
	b.noStroke();
	var rows = 30;
	var stepY = b.height/rows;
	var c1 = b.color(61, 0, 100, 2);
	var c2 = b.color(0, 59, 100, 8);

	for (var posY = 0; posY <= b.height; posY = posY + stepY) {
		var random = b.random(0.1, 1);
		for (var width = b.width; width >= b.width/1000; width = width/(1 + random) ) {
			var mapped = b.map(width, b.width/1000, b.width, 0, 1);
			b.fill(b.lerpColor(c1, c2, mapped));
			b.rect(0, posY, width, stepY);
		}
	}
}

b.go();