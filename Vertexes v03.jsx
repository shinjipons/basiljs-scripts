#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// this script is for arcs

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.strokeWeight(1);
	b.stroke(b.color(0, 0, 0, 100));
	var rows = 100;
	var stepY = b.height/rows;
	var maxLimit = 1000;
	for (var posY = 0; posY <= maxLimit + 1; posY = posY + stepY) {
		b.beginShape();
			// left point
			var newPosY = b.constrain(posY, 0, maxLimit);
			b.vertex(0,
					 b.height/2,
					 0,
					 b.height/2,
					 0,
					 newPosY);
			// right point
			var posYOpposite = b.map(newPosY, 0, maxLimit, maxLimit, 0);
			b.vertex(b.width,
				     b.height/2,
				     b.width,
				     posYOpposite,
				     b.width,
				     b.height/2);
		b.endShape();
	}
}

b.go(b.MODESILENT);