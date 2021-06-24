#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.selection();
	var myLines  = b.lines(myFrame);
	// var myCharacters = b.characters(myLines);

	var minDistance = 0;
	// var maxDistance = b.dist(b.bounds(myFrame).left, b.bounds(myFrame).top, b.bounds(myFrame).width/2, b.bounds(myFrame).height/2);
	var maxDistance = 347;

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

	for (var i = 0; i < myLines.length; i++) {
		var horizontal = b.map(i, 0, myLines.length, 10, 100);
		b.typo(myLines[i], 'horizontalScale', horizontal);
		b.typo(myLines[i], 'autoLeading', 100);
		for (var j = 0; j < 22; j++) {
			var myCharacters = b.characters(myLines[i]);
			var mappedWeight = moduloWeightArray[b.floor(b.map(j, 0, myCharacters.length, 0, moduloWeightArray.length))];
			b.typo(myCharacters[j], 'appliedFont', mappedWeight);
		}
	}
}

b.go();