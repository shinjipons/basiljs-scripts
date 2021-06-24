#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.colorMode(b.CMYK);
	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.BOTTOM_ALIGN);

	var minType = 100;
	var maxType = 200;
	var color1 = b.color(69, 0, 76, 0);
	var color2 = b.color(81, 56, 0, 0);
	
	for ( var i = minType; i < maxType + 1; i++) {
		var myFrame = b.text("A", 0, 0, b.width, b.height/1.5);
		var mapped = b.map(i, minType, maxType, 0, 100);

		b.typo(myFrame, "fillColor", b.color(0, 0, 0, 100));
		b.typo(myFrame, "pointSize", i);
		b.typo(myFrame, "fillTint", mapped);
	}
}

b.go(b.MODESILENT);
