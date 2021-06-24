#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var string = "A";
	b.textSize(700);
	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.BOTTOM_ALIGN);
	var limit = 10;
	b.noFill();
	b.noStroke();

	for (var i = 0; i < limit; i++) {
		var myFrame = b.text(string, 0, 0, b.width, b.height * (2/3) );
		b.typo(myFrame, 'hyphenation', false);
		b.typo(myFrame, 'fillColor', b.color(0, 0, 0, 0));
		b.typo(myFrame, 'strokeColor', b.color(0, 0, 0, 100));
		b.typo(myFrame, 'strokeWeight', 0.5);
		b.blendMode(myFrame, BlendMode.MULTIPLY);
		var skewMapped = b.map(i, 0, limit - 1, -45, 45);
		b.typo(myFrame, 'skew', skewMapped);
	}
}

b.go();