#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	// these two below control the stroke effect
	var limit = 20;
	var maxStrokeWeight = 800;
	var string = "stop think look buy";
	var c1 = b.color(0, 0, 0, 100);
	var c2 = b.color(0, 0, 0, 0);

	var shiftArray = [];
	var rotationArray = [];
	var scaleArray = [];

	var baseShift = 0;
	var baseRotation = 0;
	var baseScale = 100;

	b.textFont("Unifont\tMedium");
	b.textSize(300);

	for (var i = 0; i < string.length; i++) {
		shiftArray.push(b.random(-b.height/3, b.height/3));
		rotationArray.push(b.floor(b.random(-180, 180)));
		scaleArray.push(b.random(50, 200));
	}

	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);

	b.layer("original");
	var myFrame = b.text(string, 0, 0, b.width, b.height);
	b.typo(myFrame, 'fillColor', c2);
	b.typo(myFrame, 'hyphenation', false);

	b.layer("copies");
	for (var i = limit; i > 0; i--) {
		// this is creating the strokes
		var myCopy = b.text(string, 0, 0, b.width, b.height);
		var mapped = b.map(i, limit, 0, maxStrokeWeight, 0);
		if (i%2 == 0) {
			b.typo(myCopy, 'strokeColor', c1);
		} else {
			b.typo(myCopy, 'strokeColor', c2);
		}
		b.typo(myCopy, 'strokeWeight', mapped);
		b.typo(myCopy, 'strokeAlignment', TextStrokeAlign.OUTSIDE_ALIGNMENT);
		b.typo(myCopy, 'endJoin', OutlineJoin.BEVEL_END_JOIN);
		b.typo(myCopy, 'hyphenation', false);

		// this is creating the rotating and sizing of characters
		// except this time they go from the random value to the 
		// original value progressively
		var myChars = b.characters(myCopy);
		for (var j = 0; j < myChars.length; j++) {
			var singleChar = myChars[j];
			// declaring three new variables for each copy letter
			var shiftArrayMapped    = b.map(i, limit, 1, shiftArray[j], baseShift); // because i stops at 1 and not at 0!
			var rotationArrayMapped = b.map(i, limit, 1, rotationArray[j], baseRotation); // because i stops at 1 and not at 0!
			var scaleArrayMapped    = b.map(i, limit, 1, scaleArray[j], baseScale); // because i stops at 1 and not at 0!
			b.typo(singleChar, 'baselineShift',     shiftArrayMapped   );
			b.typo(singleChar, 'characterRotation', rotationArrayMapped);
			b.typo(singleChar, 'horizontalScale',   scaleArrayMapped   );
			b.typo(singleChar, 'verticalScale',     scaleArrayMapped   );
		}
	}
}

b.go();