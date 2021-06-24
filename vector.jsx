#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.rect(0, 0, 200, 200); // this draws a square at the top left
	b.Vector(10, 200); // this should move the square away from the top left corner
}

b.go();