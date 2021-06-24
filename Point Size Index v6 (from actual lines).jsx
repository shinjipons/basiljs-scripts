#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	selItems = b.selection();
	var myLines = b.lines(selItems);

	for(var i = 0; i < myLines.length; i++){
	  b.typo(myLines[i], "pointSize", i + 1);
	  b.typo(myLines[i], "appliedFont", "Aktiv Grotesk\tMedium");
	};
};

b.go();
