#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	for (var i = 100; i >= 0; i--) {
		b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);
		var myWord = b.text("Psycho", 0, 0, b.width, b.height);
		b.typo(myWord, 'appliedFont', 'Aktiv Grotesk\tRegular');
		b.typo(myWord, 'pointSize', 200);
		b.typo(myWord, 'fillColor', b.color(0, 0, 0, 0));
		if (i%2 == 0) {
			b.typo(myWord, 'strokeWeight', i);
			b.typo(myWord, 'strokeColor', b.color(0, 100, 100, 0));
			b.typo(myWord, 'endJoin', )
		} else {
			b.typo(myWord, 'strokeWeight', i);
			b.typo(myWord, 'strokeColor', b.color(0, 0, 0, 0));
			b.typo(myWord, 'endJoin', )
		}
	}
}

b.go();