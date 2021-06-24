#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var rows = 10;
	var columns = 10;
	var stepX = b.width/columns;
	var stepY = b.height/rows;
	var imageArray = ["vectorImageLayout01.ai", "vectorImageLayout02.ai", "vectorImageLayout03.ai", "vectorImageLayout04.ai"];
	for (var posX = 0; posX < b.width; posX = posX + stepX) {
		for (var posY = 0; posY < b.height; posY = posY + stepY) {
			var imageChoice = imageArray[b.floor(b.random(0, imageArray.length))];
			b.image(imageChoice, posX, posY);
		}
	}
}

b.go(b.MODESILENT);