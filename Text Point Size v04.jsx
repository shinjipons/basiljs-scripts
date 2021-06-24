#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var string = "";
	var stringReplacer = "Shinji";
	var lines = 10;
	b.textSize(10);

	// initiating the loop for the string contents
	for (var i = 0; i < lines; i++) {
		string += stringReplacer + " ";
		// create a text frame that covers the entire page
		var myFrame = b.text(string, 0, 0, b.width, b.height);
		var myLines = b.lines(myFrame);
		b.typo(myLines[i], "contents", string)
	}
}

b.go();