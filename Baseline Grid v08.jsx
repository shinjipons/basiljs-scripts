#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {	
	b.canvasMode(b.MARGIN);
	for (var i = 2; i < 52; i++) {
		var rows = b.height/i;
		var stepY = b.height/rows;
		var posX = b.width/i;
		var stepX = b.width/100;
		for (var posY = 0; posY <= b.height; posY = posY + stepY) {
			b.line(posX, posY, posX + stepX, posY);
		}
	}
}

b.go();