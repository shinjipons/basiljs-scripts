#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.colorMode(b.CMYK);

	var oneDegree = b.TWO_PI/360;
	var steps = 100;
	var radius = 200;
	b.noFill();
	b.stroke(b.color(0, 0, 0, 100));

	for (var i = 0; i <= steps; i++) {
		b.arc(b.width/2, b.height/2, radius, radius, i, i + oneDegree);
	}
}

b.go(b.MODESILENT);
