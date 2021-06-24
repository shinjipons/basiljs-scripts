#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	for (var i = 0; i < 10; i++) {
		b.rect(b.random(0, b.width), b.random(0, b.height), 100, 100);
	}
	var shapes = b.items(b.page(1));
	b.itemY(shapes, 0);
}

b.go();