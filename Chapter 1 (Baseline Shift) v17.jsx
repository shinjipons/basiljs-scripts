#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.layer("Text");
	b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.JUSTIFY_ALIGN);

	// control values below
	var marginX   = b.width - 300;
	var marginY   = b.height - 300;
	var stretch   = 300;
	var pointSize = 35;
	var leading   = 0;
	var random    = 600;

	var frameWidth = b.width - 2 * marginX;
	var frameHeight = b.height - 2 * marginY;

	var quote1 = b.loadString("Chapter 1 Quote 1.txt");
	var quote2 = b.loadString("Chapter 1 Quote 2.txt");

	// b.page(2);
	var myFrame1 = b.text(" ", marginX, marginY, frameWidth, frameHeight);
	// b.page(3);
	// var myFrame2 = b.text(" ", marginX, marginY, frameWidth, frameHeight);

	var myFrameArray = [myFrame1];
	var myQuoteArray = [quote1, quote2];

	for (var j = 0; j < myFrameArray.length; j++) {
		b.page(myFrameArray[j]);
		b.typo(myFrameArray[j], "contents", myQuoteArray[j]);
		b.typo(myFrameArray[j], 'appliedFont', 'Aktiv Grotesk\tMedium');
		b.typo(myFrameArray[j], 'pointSize', pointSize);
		b.typo(myFrameArray[j], 'fillColor', b.color(0, 0, 0, 100));
		b.typo(myFrameArray[j], 'hyphenation', false);
		b.typo(myFrameArray[j], 'leading', leading);
		var myWords = b.words(myFrameArray[j]);

		for (var i = 1; i <= myWords.length; i++) {
			var shift = b.random(0, -random); // modify this

			b.typo(myWords[i], 'baselineShift', shift);
			b.stroke(b.color(0, 100, 100, 0));
			b.strokeWeight(0.25);
			b.noFill();

			if (i < myWords.length) {
				b.layer("Strokes");
				
				for (var stretch = 1000; stretch >= 100; stretch = stretch - 10) {
					var mapped = b.map(stretch, 100, 1000, 0, 100);
					b.strokeTint(mapped);
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
				}				
				// underlines
				b.line(b.bounds(myWords[i]).left, b.bounds(myWords[i]).bottom, b.bounds(myWords[i]).right, b.bounds(myWords[i]).bottom);
			} 
		}
	}
}

b.go();