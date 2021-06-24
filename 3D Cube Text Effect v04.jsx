#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noStroke();
	b.textFont("Aktiv Grotesk\tBlack");
	b.textSize(80);
	var string = "A A A A A A A A A";
	var wordArray = b.splitTokens(string, [" "]);
	var topSide = 60; // this is bogus
	var leftSide = -30; // this should be right
	var rightSide = 30; // this should be right
	var sideArray = [topSide, leftSide, rightSide];

	// create a text frame for each word
	for (var i = 0; i < wordArray.length; i++) {
		b.layer("Entire words");
		var wordFrame = b.text(wordArray[i], b.random(0, b.width), b.random(0, b.height), 400, 400);
		var myCharacters = b.characters(wordFrame);
		// assign a "side" for each word
		var thisSide = sideArray[b.floor(b.random(0, sideArray.length))];
		// create a text frame for each letter of each word
		for (var j = 0; j < myCharacters.length; j++) {
			b.layer("Just letters");
			var characterFrame = b.text(myCharacters[j].contents, b.random(0, b.width), b.random(0, b.height), 400, 400);
			// make these blue, only for spotting purposes
			b.typo(characterFrame, 'fillColor', b.color(100, 0, 0, 0));
			// skew the letter
			b.typo(characterFrame, 'skew', thisSide);
			// rotate the letter
			var myAloneCharacter = b.characters(characterFrame);
			b.typo(myAloneCharacter[0], 'characterRotation', thisSide);
		}
	}
}

b.go();