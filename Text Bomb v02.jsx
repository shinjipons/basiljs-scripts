#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.canvasMode(b.MARGIN);
	b.textSize(14);
	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);
	// var string = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.";
	// var string = "eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee";
	var myFrame = b.text("test", 0, 0, b.width, b.height);
	b.typo(myFrame, "contents", ""); // clear the current text
	myFrame.contents = TextFrameContents.placeholderText;
	var maxDistance = b.dist(0, 0, b.width/2, b.height/2);

	b.typo(myFrame, 'hyphenation', false);

	var myChars = b.characters(myFrame);

	for (var i = 0; i < myChars.length; i++) {
		if (myChars[i].contents == "e") {
			var dist = b.dist(b.bounds(myFrame).left + b.bounds(myFrame).width/2, b.bounds(myFrame).top + b.bounds(myFrame).height/2, b.bounds(myChars[i]).left + b.bounds(myChars[i]).width/2, b.bounds(myChars[i]).top + b.bounds(myChars[i]).height/2);
			var mappedShift = b.map(dist, 0, maxDistance, 0, 100);
			if (b.bounds(myChars[i]).top + b.bounds(myChars[i]).height/2 > b.height/2) {
				mappedShift = mappedShift * -1;
			} else {
				mappedShift = mappedShift * 1;
			}
			b.typo(myChars[i], 'baselineShift', mappedShift);
		}
	}
}

b.go();
