#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var limit = 30;
	var minPointSize = 2;
	var maxPointSize = 100;

	for (var i = 0; i < limit; i++) {
		b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);
		var mappedPointSize = b.map(i, 0, limit, minPointSize, maxPointSize);
		b.noFill();
		var myFrame = b.text("repeat", 0, 0, b.width, b.height);
		b.typo(myFrame, 'appliedFont', 'Modulo 30\tRounded');
		b.typo(myFrame, 'pointSize', mappedPointSize);
		b.typo(myFrame, 'strokeColor', b.color(0, 0, 0, 100));
	}
}

b.go();