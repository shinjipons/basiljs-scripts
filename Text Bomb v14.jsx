#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.canvasMode(b.MARGIN);
	b.textSize(10);
	b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.JUSTIFY_ALIGN);
	var string = b.loadStrings("string.txt");
	var myFrame = b.text(string, 0, 0, b.width, b.height);
	b.typo(myFrame, 'hyphenation', false);
	var myChars = b.characters(myFrame);
	var radius = 200;

	for (var i = 0; i < myChars.length; i++) {
		var dist = b.dist(b.bounds(myFrame).left + b.bounds(myFrame).width/2, b.bounds(myFrame).top + b.bounds(myFrame).height/2, b.bounds(myChars[i]).left + b.bounds(myChars[i]).width/2, b.bounds(myChars[i]).top + b.bounds(myChars[i]).height/2);
		dist = b.constrain(dist, 0, radius);
		var mappedShift = b.map(dist, 0, radius, 1000, 0);
		if (b.bounds(myChars[i]).top + b.bounds(myChars[i]).height/2 > b.height/2) {
			mappedShift = mappedShift * b.random(0.5, 1) * -1;
			b.typo(myChars[i], 'baselineShift', mappedShift);
		} else {
			mappedShift = mappedShift * b.random(0.5, 1);
			b.typo(myChars[i], 'baselineShift', mappedShift);
		}
		if (b.abs(mappedShift) > 0) {
			b.typo(myChars[i], 'characterRotation', b.floor(b.random(0, 360)));
			// b.typo(myChars[i], 'skew', b.floor(b.random(-60, 60)));
		}
	}
}

b.go();
