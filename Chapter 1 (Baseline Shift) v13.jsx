#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	// using the canvasMode fucks up the position of the underlines
	// this is really not good
	// b.canvasMode(b.MARGIN);

	// below is the code for Chapter 1
	b.layer("Text");
	b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);

	b.page(2);
	var myFrame1 = b.text(" ", 0, 0, b.width, b.height);
	b.page(3);
	var myFrame2 = b.text(" ", 0, 0, b.width, b.height);
	b.linkTextFrames(myFrame1, myFrame2);

	var leading = 50;
	var chapter = b.loadString("Chapter 1.txt");
	
	b.typo(myFrame1, "contents", chapter);
	b.typo(myFrame1, 'appliedFont', 'Aktiv Grotesk\tMedium');
	b.typo(myFrame1, 'pointSize', 50);
	b.typo(myFrame1, 'fillColor', b.color(0, 0, 0, 100));
	b.typo(myFrame1, 'hyphenation', false);
	b.typo(myFrame1, 'leading', leading);

	var myWords = b.words(myFrame1);

	for (var i = 1; i <= myWords.length; i++) {


		var shift = b.floor( b.random(-leading * 0.5, leading * 0.5));
		b.typo(myWords[i], 'baselineShift', shift);
		b.stroke(b.color(0, 100, 100, 0));
		b.strokeWeight(1);
		b.noFill();
		var stretch = 150;

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







