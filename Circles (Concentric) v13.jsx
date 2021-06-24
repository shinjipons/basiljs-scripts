#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw () {
	b.canvasMode(b.MARGIN);
	
	var leftEdge = b.random(0, b.width);
	var limit = 100;

	var randomX1Start = b.random(0, b.width);
	var randomX1Finish = b.random(0, b.width);
	var randomY1Start = b.random(0, b.height);
	var randomY1Finish = b.random(0, b.height);

	var randomX2Start = b.random(0, b.width);
	var randomX2Finish = b.random(0, b.width);
	var randomY2Start = b.random(0, b.height);
	var randomY2Finish = b.random(0, b.height);

	b.noFill();
	b.stroke(b.color(0, 0, 0, 100));
	b.strokeWeight(0.2);

	for (var i = 0; i < limit; i++) {
		b.ellipseMode(b.CORNERS);
		// CORNERS mode uses the four parameters of ellipse()
		// to set the two opposing corner's of the ellipse's bounding box
		var x1 = b.map(i, 0, limit, randomX1Start, randomX1Finish);
		var y1 = b.map(i, 0, limit, randomY1Start, randomY1Finish);
		var x2 = b.map(i, 0, limit, randomX2Start, randomX2Finish);
		var y2 = b.map(i, 0, limit, randomY2Start, randomY2Finish);
		b.ellipse(x1, y1, x2, y2);
	}
}

b.go();