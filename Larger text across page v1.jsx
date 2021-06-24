#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.selection();
	var myWords = b.words(myFrame);
	var mapped = b.map(b.bounds(myWords[i]).left, 0, b.width, 1, 40);
	b.typo(myFrame, "pointSize", mapped);
}

b.go();