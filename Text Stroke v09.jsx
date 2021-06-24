#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var limit = 20;
	var string = "LOL";
	b.println("The length of the string is : " + string.length);
	var c1 = b.color(0, 100, 100, 0);
	var maxStrokeWeight = 800;

	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);
	b.textSize(100);
	b.layer("original");
	var myFrame = b.text(string, 0, 0, b.width, b.height);
	b.typo(myFrame, 'appliedFont', 'GT Pressura Mono Trial\tBold');
	b.typo(myFrame, 'fillColor', b.color(0, 0, 0, 0));

	b.layer("copies");
	for (var i = limit; i > 0; i--) {
		// this is creating the strokes
		var myCopy = b.text(string, 0, 0, b.width, b.height);
		var mapped = b.map(i, limit, 0, maxStrokeWeight, 0);
		if (i%2 == 0) {
			b.typo(myCopy, 'strokeColor', c1);
		} else {
			b.typo(myCopy, 'strokeColor', b.color(0, 0, 0, 0));
		}
		b.typo(myCopy, 'strokeWeight', mapped);
		b.typo(myCopy, 'strokeAlignment', TextStrokeAlign.OUTSIDE_ALIGNMENT);
		b.typo(myCopy, 'endJoin', OutlineJoin.ROUND_END_JOIN);

		// this is creating the rotating and sizing of characters
		var myChars = b.characters(myCopy);

		for (var j = 0; j < myChars.length; j++) {

			// var shiftArray =    [-b.height/4, 0, b.height/3]; // between -b.height/2 and b.height/2
			// var rotationArray = [-10, 0, 30]; // between -180 and 180
			// var scaleArray =    [200, 100, 300]; // between 1 and 400

			var shiftArray = [];
			var rotationArray = [];
			var scaleArray = [];

			var shiftArray[j] = b.random(-b.height/3, b.height/3);
			var rotationArray[j] = b.floor( b.random(-180, 180));
			var scaleArray[j] = b.floor( b.random(50, 300));

			var singleChar = myChars[j];
			b.typo(singleChar, 'baselineShift',     shiftArray[j]   );
			b.typo(singleChar, 'characterRotation', rotationArray[j]);
			b.typo(singleChar, 'horizontalScale',   scaleArray[j]   );
			b.typo(singleChar, 'verticalScale',     scaleArray[j]   );
		}
	}
}

b.go();