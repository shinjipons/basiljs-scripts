#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.selection();
	var angle = 30;
	var myChar = b.characters(myFrame);
	b.typo(myChar[0], 'characterRotation', angle);
	b.typo(myChar[0], 'skew', angle);
}

b.go();