#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	// add one page at the end of the document and jump to it
	b.addPage();
	b.text("Example 1", b.width/2, b.height/2, 100, 100);

}

b.go();