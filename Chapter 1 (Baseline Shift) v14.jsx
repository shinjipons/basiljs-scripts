#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.layer("Text");
	b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);

	// control values below
	var marginX   = 120;
	var marginY   = 300;
	var leading   = 200;
	var stretch   = 100;
	var factor    = 2;
	var pointSize = 20;

	var frameWidth = b.width - 2 * marginX;
	var frameHeight = b.height - 2 * marginY;

	b.page(2);
	var myFrame1 = b.text(" ", marginX, marginY, frameWidth, frameHeight);
	b.page(3);
	var myFrame2 = b.text(" ", marginX, marginY, frameWidth, frameHeight);
	b.page(4);
	var myFrame3 = b.text(" ", marginX, marginY, frameWidth, frameHeight);
	b.linkTextFrames(myFrame1, myFrame2);
	b.linkTextFrames(myFrame2, myFrame3);

	var myArray = [myFrame1, myFrame2];
	var chapter = b.loadString("Chapter 1.txt");
	
	b.typo(myFrame1, "contents", chapter);
	b.typo(myFrame1, 'appliedFont', 'Aktiv Grotesk\tMedium');
	b.typo(myFrame1, 'pointSize', pointSize);
	b.typo(myFrame1, 'fillColor', b.color(0, 0, 0, 100));
	b.typo(myFrame1, 'hyphenation', false);
	b.typo(myFrame1, 'leading', leading);

	

	for (var j = 0; j < myArray.length; j++) {
		b.page(myArray[j]);
		var myWords = b.words(myArray[j]);

		for (var i = 1; i <= myWords.length; i++) {
			var shift = b.random(-leading * factor, leading * factor);

			b.typo(myWords[i], 'baselineShift', shift);
			b.stroke(b.color(0, 100, 100, 0));
			b.strokeWeight(1);
			b.noFill();

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
	
		
}

b.go();







