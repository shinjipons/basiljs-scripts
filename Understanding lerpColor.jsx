#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.colorMode(b.CMYK);
	var c1 = b.color(100, 0, 0, 0); //process cyan
	var c2 = b.color(0, 100, 0, 0); //process magenta

	b.noStroke();
	 
	b.fill(b.lerpColor(c1, c2, 0.5)); //its lerpColor, not lerp by itself
	b.rectMode(b.CENTER);
	b.rect(b.width/2, b.height/2, 300, 300);
}

b.go();