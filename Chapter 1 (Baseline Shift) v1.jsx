#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);

	// below is the code for the philosopher image
	b.layer("Greek Philosopher");
	b.noStroke();
	b.imageMode(b.CENTER);
	var myImage = b.image("Philosopher.psd", b.width/2, b.height/2, b.width, b.height);
	b.blendMode(myImage, BlendMode.DARKEN);

	// control the amount of images using the two values below
	var minValue = 25;
	var maxValue = 50;
	
	for (var i = maxValue; i >= minValue; i--) {
		var mappedWidth = b.map(i, maxValue, minValue, b.width, b.width/maxValue);
		var mappedHeight = b.map(i, maxValue, minValue, b.height, b.height/maxValue);
		var myImageCopy = b.image("Philosopher.psd", b.width/2, b.height/2, mappedWidth, mappedHeight);
		b.blendMode(myImageCopy, BlendMode.DARKEN);
	}

	// below is the code for Chapter 1
	b.layer("Text");
	var myBlue = b.color(96, 75, 1, 0);
	var myOtherBlue = b.color(86, 58, 0, 0);
	var myGold = b.color(38, 28, 96, 3);
	var myRed = b.color(2, 100, 100, 1);
	var myChapter = b.loadStrings("Chapter 1.txt");
	var myFrame = b.text(myChapter, 0, 0, b.width, b.height);

	b.typo(myFrame, 'appliedFont', 'Aktiv Grotesk\tMedium');
	b.typo(myFrame, 'pointSize', 30);
	b.typo(myFrame, 'fillColor', b.color(0, 0, 0, 100));
	b.typo(myFrame, 'hyphenation', false);

	var myWords = b.words(myFrame);

	for (var i = 0; i <= myWords.length; i++) {
		b.typo(myWords[i], 'baselineShift', b.random(-10, 10));
		b.typo(myWords[i], 'fillColor', b.lerpColor(myGold, myRed, b.random(0, 1)));
	}
}

b.go();