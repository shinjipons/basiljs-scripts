#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var string = "A";
	b.textSize(400);
	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.BOTTOM_ALIGN);
	var limit = 10;
	b.noFill();
	b.noStroke();

	for (var i = -85; i <= 85; i++) {
		var myFrame = b.text(string, 0, 0, b.width, b.height * (2/3) );
		b.typo(myFrame, 'hyphenation', false);
		b.typo(myFrame, 'fillColor', b.color(0, 0, 0, 0));
		b.typo(myFrame, 'strokeColor', b.color(0, 0, 0, 100));
		b.typo(myFrame, 'strokeWeight', 0.5);
		b.blendMode(myFrame, BlendMode.MULTIPLY);
		b.typo(myFrame, 'skew', i);
	}
}

b.go();