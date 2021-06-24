#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var radian = 0.017453293;
	var radius = 300;
	var totalSteps = 100;
	var step = b.TWO_PI / totalSteps;
	
	for ( var i = 0; i <= b.TWO_PI; i = i + step ) {
		var mapped = b.map(i, 0, b.TWO_PI, 0, 100 );
		b.noFill();
		//cyan circle
		b.strokeWeight(250);
		b.stroke(b.color( mapped, 0, 0, 0));
		b.arc(b.width/2, b.height/2, radius, radius, i, i + step);

		//magenta circle
		b.strokeWeight(200);
		b.stroke(b.color( 0, mapped, 0, 0));
		b.arc(b.width/2, b.height/2, radius, radius, i, i + step);

		//yellow circle 
		b.strokeWeight(150);
		b.stroke(b.color( 0, 0, mapped, 0));
		b.arc(b.width/2, b.height/2, radius, radius, i, i + step);

		//black circle
		b.strokeWeight(100);
		b.stroke(b.color(0, 0, 0, mapped));
		b.arc(b.width/2, b.height/2, radius, radius, i, i + step);
	};
};

b.go(b.MODESILENT);
