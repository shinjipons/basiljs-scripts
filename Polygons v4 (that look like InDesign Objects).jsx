#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	// b.canvasMode(b.MARGIN);
	for (var i = 0; i < 25; i++) {
		b.rectMode(b.CORNER);
		b.noFill();
		b.strokeWeight(0.25);
		b.stroke(b.color(0, 100, 0, 0));

		var posX = b.random(b.width * 0.25, b.width * 0.75);
		var posY = b.random(b.height * 0.25, b.height * 0.75);

		var bigRectangle = b.rect(posX, posY, b.random(10, 100), b.random(1, 100));

		b.rectMode(b.CENTER);
		b.fill(b.color(0, 0, 0, 0));
		b.rect(b.bounds(bigRectangle).left, b.bounds(bigRectangle).top, 5, 5);
		b.rect(b.bounds(bigRectangle).right, b.bounds(bigRectangle).top, 5, 5);
		b.rect(b.bounds(bigRectangle).left, b.bounds(bigRectangle).bottom, 5, 5);
		b.rect(b.bounds(bigRectangle).right, b.bounds(bigRectangle).bottom, 5, 5);

		b.noStroke();
		b.fill(b.color(0, 100, 0, 0));
		b.rect(b.bounds(bigRectangle).left + b.bounds(bigRectangle).width/2, b.bounds(bigRectangle).top + b.bounds(bigRectangle).height/2, 2, 2);
	}
}

b.go();