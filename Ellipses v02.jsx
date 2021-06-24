#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.ellipseMode(b.CENTER);
	var counter = 3;
	var stepX = b.width/counter;
	var stepY = b.height/counter;
	var limit = 6;
	for (var posX = 0; posX <= b.width; posX = posX + stepX) {
		for (var posY = 0; posY <= b.height; posY = posY + stepY) {
			for (var i = 0; i <= limit; i++) {
	 			b.stroke(0.5);
				b.noFill();
				var mapped = b.map(i, 0, limit, 10, b.height);
				b.ellipse(posX, posY, mapped, mapped);
			}
		}
	}
};

b.go();