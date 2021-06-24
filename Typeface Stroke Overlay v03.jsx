#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var string = "A";
	b.textSize(700);
	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.BOTTOM_ALIGN);
	var limit = 10;
	var allFonts = app.fonts.everyItem().getElements();
	b.noFill();
	b.noStroke();

	for (var i = 0; i < limit; i++) {
		b.textFont( allFonts[Math.floor(Math.random()*allFonts.length)] );
		var myFrame = b.text(string, 0, 0, b.width, b.height * (2/3) );
		b.typo(myFrame, 'hyphenation', false);
		b.typo(myFrame, 'fillColor', b.color(0, 0, 0, 100));
		b.opacity(myFrame, 100/limit);
	}
}

b.go();