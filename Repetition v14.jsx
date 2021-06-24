#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var centerX = b.width/2;
	var centerY = b.height/2;
	var limit2 = 20;
	var myArray = ["shinji", "computational", "graphic", "design"]

	for (var i = 0; i < myArray.length; i++) {
		var string = myArray[i];
		var posX = b.random(0, b.width * 0.9);
		var posY = b.random(0, b.height * 0.9);
		var randomSize = b.random(80, 100);

		b.layer("destination");
		var myFrame = b.text(string, posX, posY, 300, 300);
		b.typo(myFrame, 'pointSize', randomSize);
		b.typo(myFrame, 'appliedFont', 'GT Sectra Display Trial\tRegular Italic');
		b.typo(myFrame, 'fillColor', b.color(0, 100, 100, 0));

		var distX = b.dist(centerX, 0, posX, 0);
		var radius = b.dist(centerX, centerY, posX, posY);
		var angle = b.constrain( b.acos(distX / radius), 0, 85);

		b.layer("journey");

		for (var j = 0; j < limit2; j++) {
			var posXMapped = b.map(j, 0, limit2, centerX, posX);
			var posYMapped = b.map(j, 0, limit2, centerY, posY);
			var pointSizeMapped = b.map(j, 0, limit2, randomSize * 0.1, randomSize);
			var myFrame2 = b.text(string, posXMapped, posYMapped, 300, 300);
			var mappedTint = b.map(j, 0, limit2, 0, 100);
			b.typo(myFrame2, 'pointSize', pointSizeMapped);
			b.typo(myFrame2, 'appliedFont', 'GT Sectra Display Trial\tRegular Italic');
			b.typo(myFrame2, 'fillTint', mappedTint);

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