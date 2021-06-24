#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	//the reference says that b.arc() as a bug for overlapping points
	//it might explain some weird things

	var totalSteps = 360;
	var step = b.TWO_PI / totalSteps;
	b.canvasMode(b.MARGIN);
	b.colorMode(b.CMYK);
	b.noFill()
	b.strokeWeight(100);
	
	for ( var i = 0; i < totalSteps; i = i + step) {
		var mapped = b.map(i, 0, totalSteps, 0, 100);
		b.stroke(b.color(0, 0, 0, mapped));
		b.arc(b.width/2, b.height/2, 300, 300, i, i + step);
	};
};

b.go(b.MODESILENT);
