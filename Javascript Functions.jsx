#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	confirm("I am ready to play!");
	var columns = prompt("How many columns do you want?");

	for ( var i = 0; i < columns; i++) {

		var posX = b.width/columns * i;
		b.rectMode(b.CORNER);
		b.noStroke();
		b.fill(b.color(b.random(0, 255)));
		b.rect(posX, 0, b.width/columns, b.height);
	}
};

b.go();