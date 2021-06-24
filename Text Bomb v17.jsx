#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.textSize(40);
	b.textAlign(Justification.FULLY_JUSTIFIED, VerticalJustification.CENTER_ALIGN);
	var string = b.loadStrings("string.txt");
	var myFrame = b.text(string, 0, 0, b.width, b.height);
	b.typo(myFrame, 'hyphenation', false);
	var myChars = b.characters(myFrame);
	var radius = b.width/2;

	for (var i = 0; i < myChars.length; i++) {
		var dist = b.dist(b.bounds(myFrame).left + b.bounds(myFrame).width/2, b.bounds(myFrame).top, b.bounds(myChars[i]).left, b.bounds(myChars[i]).top);
		dist = b.constrain(dist, 0, radius);
		var mappedShift = b.map(dist, 0, radius, radius * 6, 0);
		if (dist < b.height/2) {
			mappedShift = mappedShift * b.random(0.5, 1) * -1;
		} else {
			dist = b.constrain(dist, 0, radius);
			mappedShift = mappedShift * b.random(0.5, 1);
		}
		var mappedRotation = b.map(dist, 0, radius, 180, 0);
		b.typo(myChars[i], 'characterRotation', mappedRotation);
		b.typo(myChars[i], 'baselineShift', mappedShift);
	}
}

b.go(b.MODESILENT);
