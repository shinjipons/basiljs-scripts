#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.BOTTOM_ALIGN);
	b.textFont("Unifont\tMedium");
	var myFrame = b.selection();
	var myWords = b.words(myFrame);
	var size = 400;
	var stepY = b.bounds(myWords[0]).bottom;
	var height = b.bounds(myFrame).height;

	for (var i = 0; i < 10; i++) {
		b.textSize(size/(i+1));
		var myCopy = b.text(myWords[0].contents, 0, stepY * i, b.width, height/(i+1));
	}
}

b.go();