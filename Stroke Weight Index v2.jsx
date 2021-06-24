#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	for (var i = 0; i <= 10; i = i + 0.25) {
		var posY = b.map(i, 0, 10, 0, b.height);
		b.strokeWeight(i);
		b.line(0, posY, b.width, posY);
		var myFrame = b.text("Stroke weight: " + i, 0, posY, 300, 30);
		b.typo(myFrame, "fillColor", b.color(0, 100, 100, 0));
		b.typo(myFrame, "pointSize", 6);
	}
}


b.go();
