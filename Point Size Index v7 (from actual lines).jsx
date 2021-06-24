#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	// for this script to work, you must create a text frame and make the line 
	// breaks yourself by pressing the enter key and select the text
	// frame before launching the script
	// there MUST be actual text in this to work

	selItems = b.selection();
	var myLines = b.lines(selItems);

	for(var i = 0; i < myLines.length; i++){
	  b.typo(myLines[i], "pointSize", i + 1);
	  b.typo(myLines[i], "contents", myLines[i].contents + (i + 1) + " pt ");
	  b.typo(myLines[i], "appliedFont", "Aktiv Grotesk\tMedium");
	};
};

b.go();
