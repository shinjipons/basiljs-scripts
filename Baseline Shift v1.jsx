#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var myFrame = b.selection();
	var myWords = b.words(myFrame);
	b.typo(myFrame, "appliedFont", "Aktiv Grotesk\tRegular");

	for (var i = 0; i < myWords.length; i++) {
		var mapped = b.map(i, 0, myWords.length, 0, -1000);
		b.typo(myWords[i], "baselineShift", mapped);
	}
}

b.go();