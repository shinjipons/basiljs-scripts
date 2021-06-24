#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var limit = 100;
	b.stroke(b.color(0, 0, 0, 0));
	b.strokeWeight(0.25);
	b.fill(0, 100, 100, 0);
	for (var i = 1; i < limit; i++) {
		var posX = b.log(i) * 100;
		b.rect(0, 0, posX, posX);
		b.line(posX, 0, posX, b.height);
		b.line(0, posX, b.width, posX);
	}
}

b.go();