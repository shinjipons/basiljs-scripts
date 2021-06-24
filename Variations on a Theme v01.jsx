#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.textSize(40);

	for (var i = 0; i < 100; i++) {
		var myFrame1 = b.text("This", b.random(0, b.width), b.random(0, b.height), b.random(100, b.width), b.random(100, b.height));
		var myFrame2 = b.text("is", b.random(0, b.width), b.random(0, b.height), b.random(100, b.width), b.random(100, b.height));
		var myFrame3 = b.text("not", b.random(0, b.width), b.random(0, b.height), b.random(100, b.width), b.random(100, b.height));
		var myFrame4 = b.text("a", b.random(0, b.width), b.random(0, b.height), b.random(100, b.width), b.random(100, b.height));
		var myFrame5 = b.text("drill", b.random(0, b.width), b.random(0, b.height), b.random(100, b.width), b.random(100, b.height));

		var myArray = [myFrame1, myFrame2, myFrame3, myFrame4, myFrame5];
	}
}

b.go();