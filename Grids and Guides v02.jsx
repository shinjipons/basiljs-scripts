#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var limit = 100;
	for (var i = 1; i < limit; i++) {
		var posX = b.log(i) * 100;
		b.guideX(posX);
		b.guideY(posX);
	}
}

b.go();