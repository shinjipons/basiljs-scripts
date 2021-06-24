#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var limit = 10;
	for (var i = 0; i < limit; i++) {
		var posX = b.log(i);
		b.guideX(posX * 10);
	}
}

b.go();