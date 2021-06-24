#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.stroke(b.color(0, 0, 0, 100));
	var rows  = 10;
	var step = b.height/rows;

	for (var i = 0; i <= rows; i++) {
		var posY = b.map(i, 0, rows, 0, b.height);
		var mapped = b.map(posY, 0, b.height, 0.001, 10);
		b.strokeWeight(mapped);
		b.line(0, posY, b.width, posY);
		var myFrame = b.text("Stroke weight: " + mapped, 0, posY, 1000, 20);
		b.typo(myFrame, "fillColor", b.color(0, 100, 100, 0));
	}
}

b.go();