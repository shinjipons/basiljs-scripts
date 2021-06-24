#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.textFont("Unifont\tMedium");
	var size = 400;
	b.textSize(size);
	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.BOTTOM_ALIGN);
	var string = "test" // must be a single word for now

	var myFrame = b.text(string, 0, 0, b.width, 300);
	var myWords = b.words(myFrame);
	var marginY = 30;
	var posY = b.bounds(myWords[0]).bottom + marginY;
	var posX = 0;

	b.textSize(size/2);
	var myFrame2 = b.text(string, posX, posY, b.width, 300);
}

b.go();