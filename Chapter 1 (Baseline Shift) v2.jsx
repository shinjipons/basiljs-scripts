#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.layer("Text");
	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);

	var marginX = 20;
	var frameWidth = b.width - 2*marginX;
	var marginY = 200;
	var frameHeight = b.height - 2*marginY;
	var myFrame = b.text(" ", marginX, marginY, frameWidth, frameHeight);
	var leading = 100;

	b.typo(myFrame, "contents", "Of all the faculties, you will find not one which is capable of contemplating itself; and, consequently, not capable either of approving or disapproving. How far does the grammatic art possess the contemplating power? As far as forming a judgement about what is written and spoken. And how far music? As far as judging about melody. Does either of them then contemplate itself? By no means. But when you must write something to your friend, grammar will tell you what words you must write; but whether you should write or not, grammar will not tell you. And so it is with music as to musical sounds; but whether you should sing at the present time and play on the lute, or do neither, music will not tell you. What faculty then will tell you? That which contemplates both itself and all other things. And what is this faculty? The rational faculty; for this is the only faculty that we have received which examines itself, what it is, and what power it has, and what is the value of this gift, and examines all other faculties: for what else is there which tells us that golden things are beautiful, for they do not say so themselves? Evidently it is the faculty which is capable of judging of appearances. What else judges of music, grammar, and other faculties, proves their uses and points out the occasions for using them? Nothing else.");
	b.typo(myFrame, 'appliedFont', 'Aktiv Grotesk\tMedium');
	b.typo(myFrame, 'pointSize', 12);
	b.typo(myFrame, 'fillColor', b.color(0, 0, 0, 100));
	b.typo(myFrame, 'hyphenation', false);
	b.typo(myFrame, 'leading', leading);

	var myWords = b.words(myFrame);

	for (var i = 1; i <= myWords.length; i++) {
		var shift = b.floor( b.random(-leading * 0.5, leading * 0.5));
		b.typo(myWords[i], 'baselineShift', shift);
		b.stroke(b.color(0, 100, 100, 0));
		b.strokeWeight(1);
		b.noFill();
		var stretch = 15;
		if (i < myWords.length) {
			b.layer("Strokes");
			b.beginShape();
				b.vertex(b.bounds(myWords[i-1]).right, 
						 b.bounds(myWords[i-1]).bottom, 
						 b.bounds(myWords[i-1]).right, 
						 b.bounds(myWords[i-1]).bottom, 
						 b.bounds(myWords[i-1]).right + stretch, 
						 b.bounds(myWords[i-1]).bottom)
				b.vertex(b.bounds(myWords[i]).left, 
						 b.bounds(myWords[i]).bottom, 
						 b.bounds(myWords[i]).left - stretch, 
						 b.bounds(myWords[i]).bottom, 
						 b.bounds(myWords[i]).left, 
						 b.bounds(myWords[i]).bottom);
			b.endShape();
			b.line(b.bounds(myWords[i]).left, b.bounds(myWords[i]).bottom, b.bounds(myWords[i]).right, b.bounds(myWords[i]).bottom); // underlines
		} 
	}
}

b.go();