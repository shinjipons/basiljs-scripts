#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var myArray = ["Shinji", "Pons", "Kenzo", "GAME OVER"];
	// var item = myArray[2]; // this should be Kenzo, dont forget this is a zero index;
	// b.println(item);

	var randomItem = myArray[b.floor(b.random(0, myArray.length)) ];
	b.println("Random Item = " + randomItem);
};

b.go();