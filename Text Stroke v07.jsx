#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var limit = 6;
	var string = "constitution";
	var c1 = b.color(0, 100, 100, 0);
	var maxStrokeWeight = 400;

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
			var singleChar = myChars[j];
			b.typo(singleChar, 'baselineShift', b.floor( b.random(-b.height/2, b.height/2)));
			b.typo(singleChar, 'characterRotation', b.random(0, 360));
			var scale = b.floor(b.random(1, 400));
			b.typo(singleChar, 'horizontalScale', scale);
			b.typo(singleChar, 'verticalScale', scale);
		}
	}
}

b.go();