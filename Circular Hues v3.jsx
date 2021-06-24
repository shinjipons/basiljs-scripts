#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN)
	var step = b.TWO_PI/360;
	b.noFill();
	b.strokeWeight(100);
	b.stroke( b.color(0, 0, 0, 100) );
	
	for ( var i = 0; i <= b.TWO_PI; i = i + step) {
		b.arc(b.width/2, b.height/2, 300, 300, i, i + step);
	};
};

b.go(b.MODESILENT);
