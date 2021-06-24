#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.noStroke();
	b.canvasMode(b.MARGIN);
	for (var i = 0; i < 100; i ++) {
			if (i == 0) {
				var posX = 0; 
				var posY = 0;
			} else {
				var posX = 0;
				var posY = b.bounds(myImage).bottom;
			}

		var myImage = b.image("image.ai", posX, posY);
		var imageWidth = b.bounds(myImage).width / (i + 1);
		var imageHeight = b.bounds(myImage).height / (i + 1);

		b.transformImage(myImage, posX, posY, imageWidth, imageHeight);
	}
}
b.go();