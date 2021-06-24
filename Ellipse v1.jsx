#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.rectMode(b.CORNER);
	var radian = b.TWO_PI/360;
	b.layer("ellipse v1");

	for (var i = 0; i <=2; i++) {
		var cyan = b.color(100, 0, 0, 0);
		var magenta = b.color(0, 100, 0, 0);
		var yellow = b.color(0, 0, 100, 0);
		var myArray = [cyan, magenta, yellow];
		var randomColor = myArray[i];
		b.stroke(randomColor);

		for (var j = 0; j <= 2000; j = j + 50) {
			b.noFill();
			b.strokeWeight(40);
			var shapes = b.rect(0, 0, j, j);
			b.rotate(j*radian*0.001);
			b.blendMode(shapes, BlendMode.MULTIPLY);
		}
	}
}

b.go();