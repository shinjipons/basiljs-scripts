#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.clear(b.page()); // clears previous output, helpful during this tutorial

	b.textFont("Helvetica", "Regular"); 
	b.textSize(48);
	b.textTracking(500);

	//b.text('hello world', 0, 0, 150, 50); // this means b.text("your text", x, y, w, h);
	var myFrame = b.text('hello world', 0, 0, 350, 50);

	b.itemSize(myFrame, b.width, b.height);

	b.typo(myFrame,'pointSize',100);
	b.typo(myFrame,'strikeThru',true); // add strike through
	b.typo(myFrame,'characterRotation',-45); // rotates the characters?
	b.typo(myFrame,'contents', "you shit");

}

b.go();