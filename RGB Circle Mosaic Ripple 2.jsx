#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.colorMode(b.RGB);
	var c1 = b.color(255, 0, 0);
	var c2 = b.color(0, 255, 0);
	var c3 = b.color(0, 0, 255);

	var myArray = [c1, c2, c3];
	var margin = 100;

	for ( var i = 0; i < 10; i++) {
		// the variable i doesn't actually need to be in the execution code
		// it just tells the computer to run this code i times!
		for ( var j = 0; j < 3; j++) {
			var randomHeight = b.random(0, b.height);
			var radius = b.random(3, 45);
			b.ellipseMode(b.CENTER);
			b.noStroke();
			b.fill(myArray[b.floor(b.random(0, myArray.length))]);
			b.println(b.floor(b.random(0, 3)));
			b.ellipse(b.width/2         , randomHeight, radius, radius);
			b.ellipse(b.width/2 + margin, randomHeight, radius, radius);
			b.ellipse(b.width/2 - margin, randomHeight, radius, radius);
		};
	};
};

b.go();