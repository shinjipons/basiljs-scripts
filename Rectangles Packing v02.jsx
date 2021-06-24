#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for rectangle packing

function draw() {
	b.canvasMode(b.MARGIN);
	b.rectMode(b.CORNER);
	b.noFill();
	b.stroke(b.color(0, 0, 0, 100));
	b.strokeWeight(0.5);
	var rows = 30;
	var stepY = b.height/rows;

	for (var posY = 0; posY <= b.height; posY = posY + stepY) {
		var random = b.random(0.1, 1);
		for (var width = b.width; width >= b.width/1000; width = width/(1 + random) ) {
			b.rect(0, posY, width, stepY);
		}
	}
}

b.go();