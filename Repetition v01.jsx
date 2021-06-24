#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var limit = 200;

	for (var i = 0; i < limit; i++) {
		b.textFont("Modulo 30\tRounded");
		b.textSize(42);
		b.noFill();

		var posX = b.map(i, 0, limit, 0, b.width * 0.9);
		var posY = b.map(i, 0, limit, b.height * 0.9, 0);
		var myFrame = b.text("repetition", posX, posY, 500, 500);
		b.typo(myFrame, 'strokeColor', b.color(0, 0, 0, 100));
	}
}

b.go();