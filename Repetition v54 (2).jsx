#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var fontChoice = "Nine Mono\t072 Regular";
	var centerX = 0;
	var centerY = b.height/2;
	var limit = 5;
	var contents = "A wonderful serenity has taken possession of my entire soul";
	var myArray = b.splitTokens(contents, [" "]);
	var rows = myArray.length;
	var stepY = b.height/rows;
	var black = b.color(0, 0, 0, 100);
	var white = b.color(0, 0, 0, 0);
	var red = b.color(0, 100, 100, 0);
	var maxPosX = b.width;

	for (var i = 0; i < myArray.length; i++) {
		b.layer("destination");
		var string = myArray[i];
		var posX = b.random(b.width/4, maxPosX);
		var posY = stepY * i;
		// below flooring is extremely important otherwise if there are two many decimals the script will crash
		var randomSize = b.floor(b.random(100, 200));
		b.textSize(randomSize);
		var myFrame = b.text(string, posX, posY, b.width * 1.5, b.height);
		var myWords = b.words(myFrame);

		// 1: calculating the middle position of each word
		var wordMiddleX = posX + b.bounds(myWords[0]).width/2;
		var wordMiddleY = posY + b.bounds(myWords[0]).height/2;

		// 2: calculating the skew angle
		var distX = b.dist(centerX, 0, wordMiddleX, 0);
		var distY = b.dist(0, centerY, 0, wordMiddleY);
		var XScale = b.map(distX, 0, b.dist(0, b.height/2, maxPosX, b.height/2), 100, 10);
		var YScale = b.map(distY, 0, b.dist(0, b.height/2, maxPosX, b.height/2), 100, 10);
		var radius = b.dist(centerX, centerY, wordMiddleX, wordMiddleY);
		var angle = b.floor( b.constrain( b.degrees( b.acos(distX / radius) ), 0, 85) ); // max is 85

		// 3: making the word look right
		b.typo(myFrame, 'horizontalScale', XScale);
		b.typo(myFrame, 'verticalScale', YScale);
		b.typo(myFrame, 'appliedFont', fontChoice);
		b.typo(myFrame, 'fillColor', red);

		// 4: applying the skew on the first word
		if (wordMiddleX <= centerX && wordMiddleY <= centerY) {
			b.typo(myFrame, 'skew', angle);
		} else if (wordMiddleX >= centerX && wordMiddleY <= centerY) {
			b.typo(myFrame, 'skew', angle * -1);
		} else if (wordMiddleX >= centerX && wordMiddleY >= centerY) {
			b.typo(myFrame, 'skew', angle);
		} else if (wordMiddleX <= centerX && wordMiddleY >= centerY) {
			b.typo(myFrame, 'skew', angle * -1);
		}

		// 5: creating the journey words
		for (var j = 0; j < limit; j++) {
			b.layer("journey");
			var posXMapped = b.map(j, 0, limit, centerX, posX);
			var posYMapped = b.map(j, 0, limit, centerY, posY);
			var pointSizeMapped = b.map(j, 0, limit, randomSize * 0.1, randomSize);
			var myFrame2 = b.text(string, posXMapped, posYMapped, b.width * 1.5, b.height);

			// making the journey words look right
			b.typo(myFrame2, 'pointSize', pointSizeMapped);
			b.typo(myFrame2, 'appliedFont', fontChoice);
			b.typo(myFrame2, 'fillColor', black);
			b.typo(myFrame2, 'horizontalScale', XScale);
			b.typo(myFrame2, 'verticalScale', YScale);

			// applying the skew to the journey words
			if (wordMiddleX <= centerX && wordMiddleY <= centerY) {
				b.typo(myFrame2, 'skew', angle);
			} else if (wordMiddleX >= centerX && wordMiddleY <= centerY) {
				b.typo(myFrame2, 'skew', angle * -1);
			} else if (wordMiddleX >= centerX && wordMiddleY >= centerY) {
				b.typo(myFrame2, 'skew', angle);
			} else if (wordMiddleX <= centerX && wordMiddleY >= centerY) {
				b.typo(myFrame2, 'skew', angle * -1);
			}
		}
	}
}

b.go(b.MODESILENT);