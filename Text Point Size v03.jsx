#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var string = "";
	var stringReplacer = "Shinji";
	for (var i = 0; i < 3; i++) {
		string += stringReplacer + " ";
	}
	b.println(string);
}

b.go();