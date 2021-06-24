#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var centerX = b.width/2;
	var centerY = b.height/2;
	var limit = 4;
	var limit2 = 10;
	var string = "shinji";

	for (var i = 0; i < limit; i++) {
		var posX = b.random(0, b.width * 0.9);
		var posY = b.random(0, b.height * 0.9);
		var randomSize = b.random(10, 100);
		var myFrame = b.text(string, posX, posY, 300, 300);
		b.typo(myFrame, 'pointSize', randomSize);
		b.typo(myFrame, 'appliedFont', 'GT Sectra Display Trial\tRegular Italic');

		var distX = b.dist(centerX, 0, posX, 0);
		var radius = b.dist(centerX, centerY, posX, posY);
		var angle = b.constrain( b.acos(distX / radius), 0, 85);

		for (var j = 0; j < limit2; j++) {
			var posXMapped = b.map(j, 0, limit2, posX, centerX);
			var posYMapped = b.map(j, 0, limit2, posY, centerY);
			var pointSizeMapped = b.map(j, 0, limit2, randomSize, randomSize * 0.1);
			var myFrame2 = b.text(string, posXMapped, posYMapped, 300, 300);
			b.typo(myFrame2, 'pointSize', pointSizeMapped);
			b.typo(myFrame2, 'appliedFont', 'GT Sectra Display Trial\tRegular Italic');

			if (posX <= centerX && posY <= centerY) {
				b.typo(myFrame2, 'skew', b.degrees(angle));
			} else if (posX >= centerX && posY <= centerY) {
				b.typo(myFrame2, 'skew', b.degrees(angle) * -1);
			} else if (posX >= centerX && posY >= centerY) {
				b.typo(myFrame2, 'skew', b.degrees(angle));
			} else if (posX <= centerX && posY >= centerY) {
				b.typo(myFrame2, 'skew', b.degrees(angle) * -1);
			}
		}

		if (posX <= centerX && posY <= centerY) {
			b.typo(myFrame, 'skew', b.degrees(angle));
		} else if (posX >= centerX && posY <= centerY) {
			b.typo(myFrame, 'skew', b.degrees(angle) * -1);
		} else if (posX >= centerX && posY >= centerY) {
			b.typo(myFrame, 'skew', b.degrees(angle));
		} else if (posX <= centerX && posY >= centerY) {
			b.typo(myFrame, 'skew', b.degrees(angle) * -1);
		}
	}
}

b.go(b.MODESILENT);



