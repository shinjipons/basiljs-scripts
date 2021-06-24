#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.selection();
	var myArray = [10, 50];
	var myWords = b.words(myFrame); 

	b.typo(myFrame, 'hyphenation', false);
	b.typo(myFrame, 'appliedFont', 'Aktiv Grotesk\tRegular');
	
	for (var i = 0; i <= myWords.length; i++) {
		var fontSize = myArray[b.floor( b.random(0, myArray.length) ) ];
		b.typo(myWords[i], 'pointSize', fontSize);
	}
	b.typo(myFrame, 'leading', 100);
}

b.go();