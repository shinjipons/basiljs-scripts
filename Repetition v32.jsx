#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var centerX = 0;
	var centerY = b.height/2;
	var limit = 10;

 	var contents = "this is a test";

	var myArray = b.splitTokens(contents, [" "]);
	var rows = myArray.length;
	var stepY = b.height/rows;
	var black = b.color(0, 0, 0, 100);
	var white = b.color(0, 0, 0, 0);

	for (var i = 0; i < myArray.length; i++) {
		b.layer("destination");
		var string = myArray[i];
		var posX = b.random(0, b.width);
		var posY = b.map(i, 0, myArray.length, b.height * 0.1, b.height * 0.9);
		var randomSize = b.floor(b.random(100, 120));
		var myFrame = b.text(string, posX, posY, b.width, 100);
		var myWords = b.words(myFrame);
		var wordMiddleX = posX + b.bounds(myWords[0]).width/2;
		var wordMiddleY = posY + b.bounds(myWords[0]).height/2;
		var distX = b.dist(centerX, 0, wordMiddleX, 0);
		var distY = b.dist(0, centerY, 0, wordMiddleY);
		var XScale = b.map(distX, 0, b.dist(0, b.height/2, b.width, b.height), 100, 1);
		var YScale = b.map(distY, 0, b.dist(0, b.height/2, b.width, b.height), 100, 1);
		var radius = b.dist(centerX, centerY, wordMiddleX, wordMiddleY);
		var angle = b.constrain( b.degrees(b.acos(distX / radius)), 0, 64); // max is 85

		b.typo(myFrame, 'horizontalScale', XScale);
		b.typo(myFrame, 'verticalScale', YScale);
		b.typo(myFrame, 'pointSize', randomSize);
		b.typo(myFrame, 'appliedFont', 'GT Sectra Display Trial\tSuper');
		b.typo(myFrame, 'fillColor', b.color(0, 100, 100, 0));

		for (var j = 0; j < limit; j++) {
			b.layer("journey");
			var posXMapped = b.map(j, 0, limit, centerX, posX);
			var posYMapped = b.map(j, 0, limit, centerY, posY);
			var pointSizeMapped = b.map(j, 0, limit, randomSize * 0.1, randomSize);
			var myFrame2 = b.text(string, posXMapped, posYMapped, b.width, 100);

			b.typo(myFrame2, 'pointSize', pointSizeMapped);
			b.typo(myFrame2, 'appliedFont', 'GT Sectra Display Trial\tSuper');
			b.typo(myFrame2, 'fillColor', black);
			b.typo(myFrame2, 'horizontalScale', XScale);
			b.typo(myFrame2, 'verticalScale', YScale);
		}

		if (wordMiddleX <= centerX && wordMiddleY <= centerY) {
			b.typo(myFrame, 'skew', angle);
			b.typo(myFrame2, 'skew', angle);
		} else if (wordMiddleX >= centerX && wordMiddleY <= centerY) {
			b.typo(myFrame, 'skew', angle * -1);
			b.typo(myFrame2, 'skew', angle * -1);
		} else if (wordMiddleX >= centerX && wordMiddleY >= centerY) {
			b.typo(myFrame, 'skew', angle);
			b.typo(myFrame2, 'skew', angle);
		} else if (wordMiddleX <= centerX && wordMiddleY >= centerY) {
			b.typo(myFrame, 'skew', angle * -1);
			b.typo(myFrame2, 'skew', angle * -1);
		}
	}
}

b.go(b.MODESILENT);