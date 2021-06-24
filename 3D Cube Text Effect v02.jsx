#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.textSize(60);
	b.textFont("Aktiv Grotesk\tMedium");
	var string = "test";
	b.layer("original");
	var myFrame = b.text(string, 0, 0, 200, 200);
	var myChars = b.characters(myFrame);
	var rightSide = 30;

	// switch to the transformed letters
	b.layer("letters");
	for (var i = 0; i < myChars.length; i++) {
		var myCopy = b.text(myChars[i].contents, b.random(0, b.width), b.random(0, b.height), 300, 300);
		b.typo(myCopy, 'skew', rightSide);
		b.typo(myCopy, 'characterRotation', rightSide);
	}
	b.clear(b.layer("original"));
}

b.go();