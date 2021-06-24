#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.layer("Text");
	b.textAlign(Justification.FULLY_JUSTIFIED, VerticalJustification.CENTER_ALIGN);

	// control values below
	var marginX   = b.width - 300;
	var marginY   = b.height - 10;
	var stretch   = 300;
	var pointSize = 35;
	var leading   = 0;
	var random    = 40;
	var frameWidth = b.width - 2 * marginX;
	var frameHeight = b.height - 2 * marginY;
	var myFrame = b.text("Tell me the secret which you possess.", marginX, marginY, frameWidth, frameHeight);

	b.typo(myFrame, 'appliedFont', 'Aktiv Grotesk\tMedium');
	b.typo(myFrame, 'pointSize', pointSize);
	b.typo(myFrame, 'fillColor', b.color(0, 0, 0, 100));
	b.typo(myFrame, 'hyphenation', false);
	b.typo(myFrame, 'leading', leading);
	var myWords = b.words(myFrame);

	for (var i = 1; i <= myWords.length; i++) {
		var shift = b.floor(b.random(-random, random)); // modify this
		b.typo(myWords[i], 'baselineShift', shift);
		b.stroke(b.color(0, 100, 100, 0));
		b.strokeWeight(1);
		b.noFill();
		if (i < myWords.length) {
			b.layer("Strokes");
			b.beginShape();
				var vertex1 = b.vertex(b.bounds(myWords[i-1]).right, 
															 b.bounds(myWords[i-1]).bottom, 
															 b.bounds(myWords[i-1]).right, 
															 b.bounds(myWords[i-1]).bottom, 
															 b.bounds(myWords[i-1]).right + stretch, 
															 b.bounds(myWords[i-1]).bottom)

				var vertex2 = b.vertex(b.bounds(myWords[i]).left, 
															 b.bounds(myWords[i]).bottom, 
															 b.bounds(myWords[i]).left - stretch, 
															 b.bounds(myWords[i]).bottom, 
															 b.bounds(myWords[i]).left, 
															 b.bounds(myWords[i]).bottom);					
			b.endShape();
			
			var vertexLine = b.line(b.bounds(myWords[i]).left, 
															b.bounds(myWords[i]).bottom, 
															b.bounds(myWords[i]).right, 
															b.bounds(myWords[i]).bottom); // underlines
		} 
	}
}

b.go();