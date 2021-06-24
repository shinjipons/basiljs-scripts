#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.selection();
	var myArray = ["Aktiv Grotesk\tMedium", "Aktiv Grotesk\tBold", "Aktiv Grotesk\tLight", "Aktiv Grotesk\tRegular"];
	var myWords = b.words(myFrame); 

	b.typo(myFrame, 'hyphenation', false);
	
	for (var i = 0; i <= myWords.length; i++) {
		var randomFont = myArray[b.floor(b.random(0, myArray.length))];
		var sizeArray = [5, 10, 20, 40];
		var fontSize = sizeArray[b.floor(b.random(0, sizeArray.length))];
		b.typo(myWords[i], 'appliedFont', randomFont);
		b.typo(myWords[i], 'pointSize', fontSize);
	}
	b.typo(myFrame, 'leading', 20);
}

b.go();