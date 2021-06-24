#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.selection();
	var myArray = ["Aktiv Grotesk\tMedium", "Aktiv Grotesk\tBold", "Aktiv Grotesk\tLight", "Aktiv Grotesk\tRegular"];
	var myWords = b.words(myFrame, function(ch) {
		var randomFont = myArray[ b.floor( b.random(0, myArray.length) ) ];
		for (var i = 0; i <= myWords.length; i++) {
			b.typo(myWords[i], 'appliedFont', randomFont);
		}
	});

}

b.go();