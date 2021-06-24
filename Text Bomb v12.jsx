#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.canvasMode(b.MARGIN);
	b.textSize(30);
	b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);
	var string = b.loadStrings("string.txt");
	var myFrame = b.text(string, 0, 0, b.width, b.height);
	b.typo(myFrame, 'hyphenation', false);
	var myChars = b.characters(myFrame);
	var radius = 200;
	var centerX = b.width/2;
	var centerY = 0;

	for (var i = 0; i < myChars.length; i++) {
		var dist = b.dist(b.bounds(myChars[i]).left, 0, b.width, 0);
		var mappedShift = b.map(dist, 0, b.width, 500, 0);
		if (b.bounds(myChars[i]).top + b.bounds(myChars[i]).height/2 > centerY) {
			mappedShift = mappedShift * b.random(0.5, 1) * -1;
			b.typo(myChars[i], 'baselineShift', mappedShift);
			if (b.abs(mappedShift) > 0) {
				b.typo(myChars[i], 'characterRotation', b.floor(b.random(0, 360)));
			}
		}
	}
}

b.go();
