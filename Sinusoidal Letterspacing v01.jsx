#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.textSize(13);
	b.textAlign(Justification.FULLY_JUSTIFIED);
	var myFrame = b.text("something", 0, 0, b.width, b.height);
	b.typo(myFrame, "contents", ""); // clear the current text
	myFrame.contents = TextFrameContents.placeholderText;
	var myLines = b.lines(myFrame);
	for (var i = 0; i < myLines.length; i++) {
		var posY = b.bounds(myLines[i]).baseline;
		var tracking = b.map( b.sin(posY), -1, 1, -100, 0);
		b.typo(myLines[i], 'tracking', tracking);
	}
}

b.go();