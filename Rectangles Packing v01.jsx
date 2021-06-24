#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var limit = 10;
	b.rectMode(b.CORNER);
	for (var i = 0; i < limit; i++) {
		// maybe summarize the code below with if (i == 0) ?
		if (i == 0) {
			var posX = 0;
			var posY = 0;
			var width = b.random(0, b.width);
			var height = b.random(0, b.height);
		// } else if (posX > b.width) {
		} else {
			var posX = b.bounds(shape).right;
			var posY = b.bounds(shape).top;
			var width  = b.random(0, b.width  - b.bounds(shape).width);
			var height = b.random(0, b.height - b.bounds(shape).height);
		}
		b.noFill();
		b.stroke(b.color(0, 0, 0, 100));
		b.strokeWeight(0.5);
		var shape = b.rect(posX, posY, width, height);
	}
}

b.go(b.MODESILENT);