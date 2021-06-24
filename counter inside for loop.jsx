#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.noFill();
	b.rectMode(b.CENTER);
	b.strokeWeight(0.2);
	var limit = 200; //this specifies the number of shapes
	var radian = 0.0174532925; //this is just to make things easier 
	
	for ( var i = 10; i < limit; i++) {
		b.rotate(i * radian * 0.1);
		b.rect(b.width/2, b.height/2, 3*i, i);
	}
}

b.go();