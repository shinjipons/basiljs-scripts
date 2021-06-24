#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.colorMode(b.RGB);
	var c1 = b.color(255, 0, 0);
	var c2 = b.color(0, 255, 0);
	var c3 = b.color(0, 0, 255);

	var columns = 3;
	var randomHeight = b.random(0, b.height);
	b.println("randomHeight = " + randomHeight);
	var radius = 20;
	b.println("radius = " + radius);

	b.ellipseMode(b.CENTER);
	b.noStroke();
	b.fill(c1);
	b.ellipse(b.width/2, randomHeight, radius, radius);
}

b.go();