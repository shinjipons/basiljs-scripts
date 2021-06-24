#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var rows = 5;
	var columns = 5;
	var stepX = b.width/columns;
	var stepY = b.height/rows;
	var string = "repetition";
	for (var posX = 0; posX < b.width; posX = posX + stepX) {
		for (var posY = 0; posY < b.height; posY = posY + stepY) {
			var myFrame = b.text(string, posX, posY, b.width, b.height);
			var crossProduct = posX * posY;
			var pointSize = b.map(crossProduct, 0, (b.width) * (b.height), 1, 40);
			b.typo(myFrame, 'pointSize', pointSize);
		}
	}
}

b.go();