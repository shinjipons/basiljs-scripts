#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.textAlign(Justification.FULLY_JUSTIFIED, VerticalJustification.CENTER_ALIGN);
	b.textSize(100);
	var string = "anticonstitutionally";
	var myFrame = b.text(string, 0, 0, b.width, b.height);
	var myChars = b.characters(myFrame);
	var limit = 10;
	var maxStrokeWeight = 100;
	var minStrokeWeight = 0;
	var black = b.color(0, 0, 0, 100);
	var white = b.color(0, 0, 0, 0);

	for (var i = 0; i < myChars.length; i++) {
		var singleChar = myChars[i];
		b.typo(singleChar, 'baselineShift', b.floor( b.random(-b.height/2, b.height/2)));
		b.typo(singleChar, 'characterRotation', b.random(0, 360));
		var scale = b.floor(b.random(1, 400));
		b.typo(singleChar, 'horizontalScale', scale);
		b.typo(singleChar, 'verticalScale', scale);
	}

	for (var j = limit; j > 0; j--) {
		var myCopy = myFrame;
		var mappedStrokeWeight = b.map(j, 0, limit, maxStrokeWeight, minStrokeWeight);
		if (j%2 == 0) {
			b.typo(myCopy, 'strokeColor', black);
		} else {
			b.typo(myCopy, 'strokeColor', white);
		}
		b.typo(myCopy, 'strokeWeight', mappedStrokeWeight);
	}

}

b.go();