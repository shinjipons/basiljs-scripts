#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var selItem = b.selection();
	var words = b.words(selItem);
	
	for ( var i = 0; i <= words.length; i++) {
		if ( i % 2 == 0) {
			b.typo(words[i], "fillColor", b.color(100, 0, 0, 0)); // magenta
			b.typo(words[i], "baselineShift", 20);
		} else {
			b.typo(words[i], "fillColor", b.color(0, 0, 0, 100));
		}
	}
}

b.go();
