#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var limit = 10;
	var minPointSize = 2;
	var maxPointSize = 100;

	for (var j = 0; j < 9; j++) {
		for (var i = 0; i < limit; i++) {
			if (j == 0) {
				b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
			} else if (j == 1) {
				b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.TOP_ALIGN);
			} else if (j == 2) {
				b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.TOP_ALIGN);
			} else if (j == 3) {
				b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);
			} else if (j == 4) {
				b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);
			} else if (j == 5) {
				b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.CENTER_ALIGN);
			} else if (j == 6) {
				b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.BOTTOM_ALIGN);
			} else if (j == 7) {
				b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.BOTTOM_ALIGN);
			} else if (j == 8) {
				b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.BOTTOM_ALIGN);
			} 
			var mappedPointSize = b.map(i, 0, limit, minPointSize, maxPointSize);
			b.noFill();
			var myFrame = b.text("repeat", 0, 0, b.width, b.height);
			b.typo(myFrame, 'appliedFont', 'Modulo 30\tRounded');
			b.typo(myFrame, 'pointSize', mappedPointSize);
			b.typo(myFrame, 'strokeColor', b.color(0, 0, 0, 100));
		}
	}
}

b.go();