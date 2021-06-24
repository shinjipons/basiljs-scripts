#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	// using the canvasMode fucks up the position of the underlines, this is not good

	// below is the code for Chapter 1
	b.layer("Text");
	b.textAlign(Justification.FULLY_JUSTIFIED, VerticalJustification.CENTER_ALIGN);

	// set the text frames correctly on each page
	b.page(2);
	var myFrame1 = b.text(" ", 0, 0, b.width, b.height);
	b.page(3);
	var myFrame2 = b.text(" ", 0, 0, b.width, b.height);
	b.page(4);
	var myFrame3 = b.text(" ", 0, 0, b.width, b.height);
	b.page(5);
	var myFrame4 = b.text(" ", 0, 0, b.width, b.height);
	b.page(6);
	var myFrame5 = b.text(" ", 0, 0, b.width, b.height);

	var leading = 50;
	var chapter = b.loadString("Chapter 1.txt");
	var myArray = [myFrame1, myFrame2, myFrame3, myFrame4, myFrame5];

	// setting the right typography to the chapter
	b.typo(myFrame1, "contents", chapter);
	b.typo(myFrame1, 'appliedFont', 'Aktiv Grotesk\tMedium');
	b.typo(myFrame1, 'pointSize', 15);
	b.typo(myFrame1, 'fillColor', b.color(0, 0, 0, 100));
	b.typo(myFrame1, 'hyphenation', false);
	b.typo(myFrame1, 'leading', leading);

	// linking the text frames programmatically
	for (var i = 0; i < myArray.length - 1; i++) {
		b.linkTextFrames(myArray[i], myArray[i+1]);
		b.page(myArray[i]);
		var myWords = b.words(myArray[i]);

		// code for the underlines
		for (var j = 1; j <= myWords.length; j++) {

			var shift = b.floor( b.random(-leading * 0.5, leading * 0.5));
			var stretch = 15;

			b.typo(myWords[i], 'baselineShift', shift);
			b.stroke(b.color(0, 100, 100, 0));
			b.strokeWeight(1);
			b.noFill();

			if (i < myWords.length) {
				b.layer("Strokes");
				b.beginShape();
					b.vertex(b.bounds(myWords[j-1]).right, 
							 b.bounds(myWords[j-1]).bottom, 
							 b.bounds(myWords[j-1]).right, 
							 b.bounds(myWords[j-1]).bottom, 
							 b.bounds(myWords[j-1]).right + stretch, 
							 b.bounds(myWords[j-1]).bottom)

					b.vertex(b.bounds(myWords[j]).left, 
							 b.bounds(myWords[j]).bottom, 
							 b.bounds(myWords[j]).left - stretch, 
							 b.bounds(myWords[j]).bottom, 
							 b.bounds(myWords[j]).left, 
							 b.bounds(myWords[j]).bottom);
				b.endShape();
				b.line(b.bounds(myWords[i]).left, b.bounds(myWords[i]).bottom, b.bounds(myWords[i]).right, b.bounds(myWords[i]).bottom); // underlines
			} 
		}
	}		
}

b.go();







