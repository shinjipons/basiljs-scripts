#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noStroke();
	b.textFont("Aktiv Grotesk\tBlack");
	b.textSize(30);
	var string = "THIS IS JUST A TEST FOR EXPERIENCE";
	var leftSide = -35; // this should be right
	var rightSide = 35; // this should be right
	var sideArray = [leftSide, rightSide];
	var stepX = b.width/(string.length);
	var stepY = b.height/(string.length);
	b.layer("original")
	var myFrame = b.text(string, 0, 0, 1000, 1000);
	var myChars = b.characters(myFrame);

	for (var i = 0; i < myChars.length; i++) {
		var posX = stepX * i;
		var posY = stepY * i;
		b.layer("copies");
		var characterFrame = b.text(myChars[i].contents, posX, posY, 100, 100);
		var thisSide = sideArray[b.floor(b.random(0, sideArray.length))];
		b.typo(characterFrame, 'skew', thisSide);
		// rotate the letter
		b.typo(characterFrame, 'characterRotation', thisSide); // this might not work
	}
}

b.go();