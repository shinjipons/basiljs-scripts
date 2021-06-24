#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var centerX = b.width/2;
	var centerY = b.height/2;
	var limit = 10;

	for (var i = 0; i < limit; i++) {
		var posX = b.random(0, b.width);
		var posY = b.random(0, b.height);
		var myFrame = b.text("test", posX, posY, 300, 300);
		b.line(centerX, centerY, posX, posY);

		var distX = b.dist(centerX, 0, posX, 0);
		var radius = b.dist(centerX, centerY, posX, posY);
		var angle = b.acos(distX / radius);
		var angleConstrained = b.constrain(angle, 0, 85);

		if (posX < centerX && posY < centerY) {
			b.typo(myFrame, 'skew', b.degrees(angleConstrained));
		} else if (posX > centerX && posY < centerY) {
			b.typo(myFrame, 'skew', b.degrees(angleConstrained) * -1);
		} else if (posX > centerX && posY > centerY) {
			b.typo(myFrame, 'skew', b.degrees(angleConstrained));
		} else if (posX < centerX && posY > centerY) {
			b.typo(myFrame, 'skew', b.degrees(angleConstrained) * -1);
		}
	}
}

b.go(b.MODESILENT);