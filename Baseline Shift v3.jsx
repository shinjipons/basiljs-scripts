#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.selection();

	b.itemPosition(myFrame, 0, 0);
	b.itemSize(myFrame, b.width * 2, b.height);

	b.typo(myFrame, "pointSize", 100);
	b.typo(myFrame, "appliedFont", "Aktiv Grotesk\tBold");
	b.typo(myFrame, "leading", 50);
	b.typo(myFrame, "hyphenation", false);

	var myLines = b.lines(myFrame);

	for (var i = 0; i <= myLines.length; i++) {
		if (i % 2 == 0) {
			b.typo(myLines[i], "fillColor", b.color(100, 0, 0, 0));
		} else {
			b.typo(myLines[i], "fillColor", b.color(0, 100, 0, 0));
		}
	}
}

b.go();