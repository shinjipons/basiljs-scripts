#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.selection();
	var myWords = b.words(myFrame);
	var color1 = b.color(66, 0, 95, 0);
	var color2 = b.color(1, 15, 80, 0);
	b.typo(myFrame, 'fillColor', b.color(0, 0, 0, 0));
	for (var i = 0; i < myWords.length; i++) {
		b.rectMode(b.CORNER);
		b.noStroke();
		var mapped = b.map(i, 0, myWords.length - 1, 0, 1);
		b.fill(b.lerpColor(color1, color2, mapped));
		b.rect(b.bounds(myWords[i]).left, b.bounds(myWords[i]).top, 400, 400);
		b.typo(myWords[i], 'fillColor', b.lerpColor(color2, color1, mapped));
	}
}

b.go();