#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	for (var i = 20; i >= 1; i--) {
		var typeSize = 40;
		var leading = typeSize * 1.2;
		b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);

		var myFrame = b.text('The things in our control are by nature free, unrestrained, unhindered; but those not in our control are weak, slavish, restrained, belonging to others. Remember, then, that if you suppose that things which are slavish by nature are also free, and that what belongs to others is your own, then you will be hindered. You will lament, you will be disturbed, and you will find fault both with gods and men. But if you suppose that only to be your own which is your own, and what belongs to others such as it really is, then no one will ever compel you or restrain you. Further, you will find fault with no one or accuse no one. You will do nothing against your will. No one will hurt you, you will have no enemies, and you not be harmed.', 0, 0, 2*b.width, b.height);
		b.typo(myFrame, 'appliedFont', 'Aktiv Grotesk\tRegular');
		b.typo(myFrame, 'pointSize', typeSize);
		b.typo(myFrame, 'fillColor', b.color(0, 0, 0, 0));
		b.typo(myFrame, 'leading', leading);
		var mapped = b.map(i, 1, 10, 1, 100);
		
		if (i % 2 == 0) {
			b.typo(myFrame, 'strokeWeight', mapped);
			b.typo(myFrame, 'strokeColor', b.color(0, 100, 100, 0));
		} else {
			b.typo(myFrame, 'strokeWeight', mapped);
			b.typo(myFrame, 'strokeColor', b.color(0, 0, 0, 0));
		}
	}
}

b.go();