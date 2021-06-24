#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var centerX = b.width/2;
	var centerY = b.height/2;
	var posX = b.random(0, b.width);
	var posY = b.random(0, b.height);
	var myFrame = b.text("test", posX, posY, 300, 300);
	b.line(centerX, centerY, posX, posY);

	var distX = b.dist(centerX, 0, posX, 0);
	var radius = b.dist(centerX, centerY, posX, posY);
	var angle = b.acos(distX / radius);

	b.println("The angle equals to: " + b.degrees(angle));
}

b.go();