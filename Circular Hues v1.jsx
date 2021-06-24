#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.colorMode(b.CMYK);
	var radius = 300;
	var radian = 0.017453293; //one degree
	var fullCircle = 360 * radian;  
	var steps = 100;
	b.noFill();
	b.strokeWeight(100);
	b.stroke(b.color(0, 0, 0, 100));

	for ( var i = 0; i <= b.TWO_PI; i = i + (b.TWO_PI/steps) ) {
		//this should give me 100 steps
		b.arc(b.width/2, b.height/2, radius, radius, i, i + (fullCircle/steps));
	};
};

b.go(b.MODESILENT);
