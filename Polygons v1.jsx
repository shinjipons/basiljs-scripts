#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var step = 50;
	b.rectMode(b.CORNER);
	b.noFill();
	b.strokeWeight(0.25);
	b.stroke(b.color(0, 100, 0, 0));

	for (var posY = 0; posY <= b.height; posY = posY + step) {
		for (var posX = 0; posX <= b.width; posX = posX + step) {
			b.rect(posX, posY, b.random(1, 100), b.random(1, 100));
		}
	}
}

b.go();