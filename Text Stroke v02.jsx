#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var steps = 6;
	var string = "Hypnosis Prognosis";
	var c1 = b.color(0, 100, 100, 0);
	var maxStrokeWeight = 400;

	b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);
	b.textSize(200);

	var myFrame = b.text(string, 0, 0, b.width, b.height);

	b.typo(myFrame, 'appliedFont', 'GT Pressura Mono Trial\tBold');
	b.typo(myFrame, 'fillColor', b.color(0, 0, 0, 0));

	for (var i = steps; i > 0; i--) {

		var myCopy = b.text(string, 0, 0, b.width, b.height);
		var mapped = b.map(i, steps, 0, maxStrokeWeight, 0);

		if (i%2 == 0) {
			b.typo(myCopy, 'strokeColor', c1);
		} else {
			b.typo(myCopy, 'strokeColor', b.color(0, 0, 0, 0));
		}
		b.typo(myCopy, 'strokeWeight', mapped);
		b.typo(myCopy, 'strokeAlignment', TextStrokeAlign.OUTSIDE_ALIGNMENT);
		b.typo(myCopy, 'endJoin', OutlineJoin.ROUND_END_JOIN);
	}
}

b.go();