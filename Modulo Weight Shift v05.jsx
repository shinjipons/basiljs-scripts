#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myFrame = b.selection();
	var myLines  = b.lines(myFrame);
	var myCharacters = b.characters(myFrame);

	var minDistance = 0;
	// var maxDistance = b.dist(b.bounds(myFrame).left, b.bounds(myFrame).top, b.bounds(myFrame).width/2, b.bounds(myFrame).height/2);
	var maxDistance = 347;

	var moduloWeightArray = ["Modulo 02\tRegular", "Modulo 04\tRegular", "Modulo 08\tRegular", "Modulo 10\tRegular", "Modulo 12\tRegular", "Modulo 14\tRegular", "Modulo 16\tRegular", "Modulo 18\tRegular", "Modulo 20\tRegular", "Modulo 22\tRegular", "Modulo 24\tRegular", "Modulo 26\tRegular", "Modulo 28\tRegular", "Modulo 30\tRegular", "Modulo 32\tRegular", "Modulo 34\tRegular", "Modulo 36\tRegular", "Modulo 38\tRegular", "Modulo 40\tRegular", "Modulo 42\tRegular"];

	//changing the weight of each character
	for (var i = 0; i < myCharacters.length; i++) {
		var distance = b.dist(b.bounds(myFrame).left + 0.5 * b.bounds(myFrame).width,
													b.bounds(myFrame).top + 0.5 * b.bounds(myFrame).height,
													b.bounds(myCharacters[i]).left + 0.5 * b.bounds(myCharacters[i]).width,
													b.bounds(myCharacters[i]).top + 0.5 * b.bounds(myCharacters[i]).height);
		var weightChoice = b.floor(b.map(distance, minDistance, maxDistance, 0, moduloWeightArray.length));
		b.println(distance);

		b.typo(myCharacters[i], 'appliedFont', moduloWeightArray[weightChoice]);
	}
}

b.go();