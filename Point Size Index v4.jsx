#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	selItems = b.selection();
	var myLines = b.lines(selItems);

	for(var i = 40; i < myLines.length; i++){
	  b.typo(myLines[i - 40], "pointSize", i + 1)
	  b.typo(myLines)
	};
};

b.go();
