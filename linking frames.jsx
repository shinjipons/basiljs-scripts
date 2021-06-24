#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var myFrame1 = b.text('this is frame 1', b.random(b.width), b.random(b.height), b.random(30,300), b.random(30,300));
	var myFrame2 = b.text('this is frame 2', b.random(b.width), b.random(b.height), b.random(30,300), b.random(30,300));
	b.linkTextFrames(myFrame1, myFrame2);
	b.typo(myFrame1, "contents", ""); //this clear myFrame1
	myFrame1.contents = TextFrameContents.placeholderText;
}

b.go();