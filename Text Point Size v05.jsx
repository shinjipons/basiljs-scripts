#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noStroke();
	var posX = 0;
	var posY = 0;
	for (var i = 0; i < 3; i ++) {
		var myImage = b.image("image.ai", posX, posY);
		posY = b.bounds(myImage).bottom;
	}
}
b.go();