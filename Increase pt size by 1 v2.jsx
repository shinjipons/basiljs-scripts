#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.colorMode(b.CMYK);
	var minType = 1;
	var maxType = 600;
	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);
	
	for ( var i = minType; i < maxType + 1; i = i + 1) {
		b.textSize(i);
		var myFrame = b.text("A", 0, 0, b.width, b.height);
		b.typo(myFrame, 'strokeColor', b.color( b.random(0, 100), b.random(0, 100), b.random(0, 100), b.random(0, 100) ) );
		b.typo(myFrame, 'strokeWeight', 0.03);
		b.typo(myFrame, 'appliedFont', 'Modulo 22\tRegular');
		b.typo(myFrame, 'characterRotation', i);
	}
}

b.go(b.MODESILENT);
