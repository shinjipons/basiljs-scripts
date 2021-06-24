#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.text(string, )
	b.typo(myFrame, 'fillColor', b.color(0, 100, 100, 0));
	var myShadow = b.text(myFrame.contents, b.bounds(myFrame).left, b.bounds(myFrame).top, b.bounds(myFrame).width, b.bounds(myFrame).height);
	b.typo(myShadow, 'skew', 85);
	b.typo(myShadow, 'fillColor', b.color(0, 0, 0, 100));
}

b.go();