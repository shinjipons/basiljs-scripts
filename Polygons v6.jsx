#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.ellipseMode(b.CENTER);
	b.noStroke();
	b.canvasMode(b.MARGIN);
	for (var i = 20; i >= 1; i--) {
		var color1 = b.color(50, 0, 100, 0);
		var color2 = b.color(80, 75, 0, 0);
		var mapped = b.map(i, 1, 100, 0, 1);
		var radian = b.TWO_PI/360;
		var rectWidth = b.map(i, 1, 100, 1, 800);
		var rectHeight = b.map(i, 1, 100, 40, 800);
		var mappedRotation = b.map(i, 1, 100, -b.TWO_PI * i, b.TWO_PI * i);

		b.fill(b.lerpColor(color1, color2, mapped));
		b.rotate(radian * mappedRotation);
		b.ellipse(b.width/2, b.height/2, rectWidth, rectHeight);
	}
}

b.go();