#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.selection();
	var myCharacters = b.characters(myFrame);
	// var myCharacters = b.characters(myLines);
	var moduloWeightArray = ["Modulo 02", 
													 "Modulo 04", 
													 "Modulo 08", 
													 "Modulo 10", 
													 "Modulo 12", 
													 "Modulo 14", 
													 "Modulo 16", 
													 "Modulo 18", 
													 "Modulo 20", 
													 "Modulo 22", 
													 "Modulo 24", 
													 "Modulo 26", 
													 "Modulo 28", 
													 "Modulo 30", 
													 "Modulo 32", 
													 "Modulo 34", 
													 "Modulo 36", 
													 "Modulo 38", 
													 "Modulo 40", 
													 "Modulo 42"];
	var moduloStyleArray = ["Regular",
													"Rounded", 
													"Vertical",
													"Horizontal",
													"Angled",
													"Inline",
													"Outline",
													"Background"];

	for (var i = 0; i < myCharacters.length; i++) {
		var myCharacters = b.characters(myFrame);
		var mappedWeight = moduloWeightArray[b.floor(b.random(0, moduloWeightArray.length))];
		var mappedStyle = moduloStyleArray[b.floor(b.random(0, moduloStyleArray.length))];
		b.typo(myCharacters[i], 'appliedFont', mappedWeight+"\t"+mappedStyle);
	}
}

b.go();