#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.layer("Text");
	b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.JUSTIFY_ALIGN);

	// control values below
	var marginX   = b.width - 10;
	var marginY   = b.height - 10;
	var stretch   = 300;
	var pointSize = 25;
	var leading   = 0;
	var random    = 600;
	var frameWidth = b.width - 2 * marginX;
	var frameHeight = b.height - 2 * marginY;
	var quote1 = "Of the use of sophistical arguments, and hypothetical, and the like."
	var myFrame1 = b.text(" ", marginX, marginY, frameWidth, frameHeight);


		b.page(myFrame1);
		b.typo(myFrame1, "contents", quote1);
		b.typo(myFrame1, 'appliedFont', 'Aktiv Grotesk\tMedium');
		b.typo(myFrame1, 'pointSize', pointSize);
		b.typo(myFrame1, 'fillColor', b.color(0, 0, 0, 100));
		b.typo(myFrame1, 'hyphenation', false);
		b.typo(myFrame1, 'leading', leading);
		var myWords = b.words(myFrame1);

		for (var i = 1; i <= myWords.length; i++) {
			var shift = b.random(0, -random); // modify this

			b.typo(myWords[i], 'baselineShift', shift);
			b.stroke(b.color(93, 75, 0, 0));
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

b.go();







