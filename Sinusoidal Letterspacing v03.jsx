#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.textSize(30);
	b.textAlign(Justification.FULLY_JUSTIFIED);
	var myFrame = b.text("something", 0, 0, b.width, b.height);
	b.typo(myFrame, "contents", ""); // clear the current text
	myFrame.contents = TextFrameContents.placeholderText;
	var myLines = b.lines(myFrame);
	for (var i = 0; i < myLines.length; i++) {
		if (i%2 == 0) {
			var tracking = -100;
		} else {
			var tracking = 100;
		}
		b.typo(myLines[i], 'tracking', tracking);
	}
}

b.go();