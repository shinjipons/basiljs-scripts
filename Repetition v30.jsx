#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var centerX = 0;
	var centerY = b.height/2;
	
 	var contents = "He who is making progress, having learned from philosophers that desire means the desire of good things, and aversion means aversion from bad things; having learned too that happiness and tranquillity are not attainable by man otherwise than by not failing to obtain what he desires, and not falling into that which he would avoid; such a man takes from himself desire altogether and defers it, but he employs his aversion only on things which are dependent on his will. For if he attempts to avoid anything independent of his will, he knows that sometimes he will fall in with something which he wishes to avoid, and he will be unhappy. Now if virtue promises good fortune and tranquillity and happiness, certainly also the progress toward virtue is progress toward each of these things. For it is always true that to whatever point the perfecting of anything leads us, progress is an approach toward this point.";

	var myArray = b.splitTokens(contents, [" "]);
	var rows = myArray.length;
	var stepY = b.height/rows;
	var black = b.color(0, 0, 0, 100);
	var white = b.color(0, 0, 0, 0);

	for (var i = 0; i < myArray.length; i++) {
		var string = myArray[i];
		var posX = b.random(0, b.width);
		var posY = b.map(i, 0, myArray.length, b.height * 0.1, b.height * 0.9);
		var randomSize = b.floor(b.random(100/2, 120/2));
		var myFrame = b.text(string, posX, posY, b.width, 100);
		var myWords = b.words(myFrame);
		var wordMiddleX = posX + b.bounds(myWords[0]).width/2;
		var wordMiddleY = posY + b.bounds(myWords[0]).height/2;
		var distX = b.dist(centerX, 0, wordMiddleX, 0);
		var distY = b.dist(0, centerY, 0, wordMiddleY);
		var XScale = b.map(distX, 0, b.dist(0, 0, b.width, b.height), 100, 1);
		var YScale = b.map(distY, 0, b.dist(0, 0, b.width, b.height), 100, 1);
		var radius = b.dist(centerX, centerY, wordMiddleX, wordMiddleY);
		var angle = b.constrain( b.degrees(b.acos(distX / radius)), 0, 64); // max is 85

		b.typo(myFrame, 'horizontalScale', XScale);
		b.typo(myFrame, 'verticalScale', YScale);
		b.typo(myFrame, 'pointSize', randomSize);
		b.typo(myFrame, 'appliedFont', 'GT Sectra Display Trial\tSuper');
		b.typo(myFrame, 'fillColor', black);
		b.typo(myFrame, 'strokeColor', white);
		b.typo(myFrame, 'strokeWeight', 1);

		if (wordMiddleX <= centerX && wordMiddleY <= centerY) {
			b.typo(myFrame, 'skew', angle);
		} else if (wordMiddleX >= centerX && wordMiddleY <= centerY) {
			b.typo(myFrame, 'skew', angle * -1);
		} else if (wordMiddleX >= centerX && wordMiddleY >= centerY) {
			b.typo(myFrame, 'skew', angle);
		} else if (wordMiddleX <= centerX && wordMiddleY >= centerY) {
			b.typo(myFrame, 'skew', angle * -1);
		}
	}
}

b.go(b.MODESILENT);