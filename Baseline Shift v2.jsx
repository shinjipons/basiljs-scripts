#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var myFrame = b.selection();
	var myArray = ["a", "e"];

	b.characters(myFrame, function(ch) {
		// if there are any "a" or "e" in the text
		// changes the color of these letter to red or something
		for (var i = 0; i < myArray.length; i++) {
			if (ch.contents === myArray[i]) {
				b.typo(ch, "fillColor", b.color(0, 100, 100, 0));
			};
		};
	});
}

b.go();