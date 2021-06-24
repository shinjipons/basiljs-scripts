#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.canvasMode(b.MARGIN);
	b.textSize(54);
	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);

	var string = "eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee";
	var myFrame = b.text(string, 0, 0, b.width, b.height);
	var maxDistance = b.dist(0, 0, b.width/2, b.height/2);

	b.typo(myFrame, 'hyphenation', false);

	var myChars = b.characters(myFrame);

	for (var i = 0; i < myChars.length; i++) {
		if (myChars[i].contents == "e") {
			var dist = b.dist(b.bounds(myFrame).left + b.bounds(myFrame).width/2, b.bounds(myFrame).top + b.bounds(myFrame).height/2, b.bounds(myChars[i]).left + b.bounds(myChars[i]).width/2, b.bounds(myChars[i]).top + b.bounds(myChars[i]).height/2);
			var mappedShift = b.map(dist, 0, maxDistance, 0, 10);
			b.typo(myChars[i], 'baselineShift', mappedShift);
		}
	}
}

b.go();
