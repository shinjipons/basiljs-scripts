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

	for (var i = 0; i < myChars.length; i++) {
		var dist = b.dist(b.bounds(myChars[i]).left, 0, b.width, 0);
		var mappedShift = b.log(1000 * b.map(dist, 0, b.width, 100000, 0));
		mappedShift = mappedShift * b.random(0.5, 1) * -1;
		b.typo(myChars[i], 'baselineShift', mappedShift);
	}
}

b.go();
