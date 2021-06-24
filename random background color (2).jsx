#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	//create random color
	var newRandomColor = b.color(b.random(255), b.random(255), b.random(255));

	//fill rectangle with it
	b.noStroke();
	b.fill(newRandomColor);
	b.rect(0, 0, b.width, b.height);
}

b.go();