#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noStroke();
	b.textFont("Aktiv Grotesk\tBlack");
	b.textSize(80);
	var string = "THIS IS JUST A TEST FOR EXPERIENCE";
	var wordArray = b.splitTokens(string, [" "]);
	var topSide = 60; // this is bogus
	var leftSide = -30; // this should be right
	var rightSide = 30; // this should be right
	var sideArray = [leftSide, rightSide];
	var stepX = b.width/(string.length);
	var stepY = b.height/(string.length);

	b.println(string.length);

	// create a text frame for each word
	for (var i = 0; i < wordArray.length; i++) {
		b.layer("Entire words");
		var wordFrame = b.text(wordArray[i], b.random(0, b.width), b.random(0, b.height), 400, 400);
		var myCharacters = b.characters(wordFrame);
		// assign a "side" for each word
		var thisSide = sideArray[b.floor(b.random(0, sideArray.length + 0.99))];
		// create a text frame for each letter of each word
		for (var j = 0; j < myCharacters.length; j++) {
			b.layer("Just letters");
			var posX = b.random(0, b.width);
			var posY = b.random(0, b.height);
			var characterFrame = b.text(myCharacters[j].contents, posX, posY, 400, 400);
			// skew the letter
			b.typo(characterFrame, 'skew', thisSide);
			// rotate the letter
			var myAloneCharacter = b.characters(characterFrame);
			b.typo(myAloneCharacter[0], 'characterRotation', thisSide);
		}
	}
}

b.go();