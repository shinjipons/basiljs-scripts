#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.textSize(30);
	b.textAlign(Justification.FULLY_JUSTIFIED);
	var myFrame = b.text("something", 0, 0, b.width, b.height/10);
	b.typo(myFrame, "contents", ""); // clear the current text
	myFrame.contents = TextFrameContents.placeholderText;
	var myChars = b.characters(myFrame);
	for (var i = 0; i < myChars.length; i++) {
		b.typo(myChars[i], 'characterRotation', 90);
	}
}

b.go();