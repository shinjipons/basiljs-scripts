#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.selection();
	var myLines  = b.lines(myFrame);
	var myCharacters = b.characters(myFrame);

	var moduloWeightArray = ["Modulo 02\tRegular", 
													 "Modulo 04\tRegular", 
													 "Modulo 08\tRegular", 
													 "Modulo 10\tRegular", 
													 "Modulo 12\tRegular", 
													 "Modulo 14\tRegular", 
													 "Modulo 16\tRegular", 
													 "Modulo 18\tRegular", 
													 "Modulo 20\tRegular", 
													 "Modulo 22\tRegular", 
													 "Modulo 24\tRegular", 
													 "Modulo 26\tRegular", 
													 "Modulo 28\tRegular", 
													 "Modulo 30\tRegular", 
													 "Modulo 32\tRegular", 
													 "Modulo 34\tRegular", 
													 "Modulo 36\tRegular", 
													 "Modulo 38\tRegular", 
													 "Modulo 40\tRegular", 
													 "Modulo 42\tRegular"];

	//changing the weight of each line
	for (var i = 0; i < myLines.length; i++) {
		b.typo(myCharacters[i], 'appliedFont', moduloWeightArray[b.floor(b.random(0, moduloWeightArray.length))]);
	}
}

b.go();