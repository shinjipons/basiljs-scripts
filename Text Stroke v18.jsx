#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	// these two below control the stroke effect
	var limit = 50;
	var maxStrokeWeight = 500;
	var string = "elliptical";
	b.println("The length of the string is : " + string.length);
	var c1 = b.color(0, 0, 0, 100);
	var c2 = b.color(0, 0, 0, 0);
	var shiftArray = [];
	var rotationArray = [];
	var scaleArray = [];

	b.textFont("Unifont\tMedium");

	for (var i = 0; i < string.length; i++) {
		shiftArray.push(b.random(-b.height/3, b.height/3));
		rotationArray.push(b.floor(b.random(-180, 180)));
		scaleArray.push(b.random(50, 200));
	}

	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);
	b.textSize(100);
	b.layer("original");
	var myFrame = b.text(string, 0, 0, b.width, b.height);
	b.typo(myFrame, 'fillColor', b.color(0, 0, 0, 0));

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

		// this is creating the rotating and sizing of characters
		var myChars = b.characters(myCopy);
		for (var j = 0; j < myChars.length; j++) {
			var singleChar = myChars[j];
			b.typo(singleChar, 'baselineShift',     shiftArray[j]   );
			b.typo(singleChar, 'characterRotation', rotationArray[j]);
			b.typo(singleChar, 'horizontalScale',   scaleArray[j]   );
			b.typo(singleChar, 'verticalScale',     scaleArray[j]   );
		}
	}
}

b.go();