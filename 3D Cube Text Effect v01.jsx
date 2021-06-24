#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var string = "something to test";
	b.layer("original");
	var myFrame = b.text(string, 0, 0, 200, 200);
	var myChars = b.characters(myFrame);
	var rightSide = 30;

	// make the original frame invisible
	b.opacity(myFrame, 0);

	// switch to the transformed letters
	b.layer("letters");
	for (var i = 0; i < myChars.length; i++) {
		var myCopy = b.text(myChars[i].contents, b.random(0, b.width), b.random(0, b.height), 300, 300);
		b.typo(myChars[i], 'skew', rightSide)
	}
}

b.go();