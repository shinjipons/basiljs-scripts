#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.textSize(60);
	b.textFont("Aktiv Grotesk\tMedium");
	var string = "something to share";
	b.layer("original");
	var myFrame = b.text(string, 0, 0, 200, 200);

	// declaring the three sides
	var rightSide = 30;
	var topSide = 120; // this is a bogus number
	var leftSide = 0; // this is a bogus number

	// get every word and assign a side to each one
	var myWords = b.words(myFrame);
	var sideArray = []; // setting up empty array
	// assigning a side for each word randomly
	for (var i = 0; i < myWords.length; i++) {
		// creating text frame with each word separated
		var myCopy1 = b.text
	}

	var myChars = b.characters(myCopy1);


		// switch to the transformed letters
		b.layer("letters");
		for (var i = 0; i < myChars.length; i++) {
			var myCopy2 = b.text(myChars[i].contents, b.random(0, b.width), b.random(0, b.height), 300, 300);
			b.typo(myCopy2, 'skew', rightSide);
			b.typo(myCopy2, 'characterRotation', rightSide);
		}
	}
}

b.go();