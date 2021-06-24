#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.rectMode(b.CENTER);
	b.noStroke();

	for (var i = 200; i >= 0; i--) {
		var color1 = b.color(50, 0, 100, 0);
		var color2 = b.color(80, 75, 0, 0);
		var mapped = b.map(i, 1, 100, 0, 1);
		var radian = b.TWO_PI/360;
		var rectWidth = b.map(i, 1, 100, 1, 700);
		var mappedRotation = b.map(i, 1, 100, -b.TWO_PI, b.TWO_PI);

		b.fill(b.lerpColor(color1, color2, mapped));
		b.rotate(radian * mappedRotation);
		b.rect(b.width/2, b.height/2, rectWidth, rectWidth);
	}
}

b.go(b.MODESILENT);