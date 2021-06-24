#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var imgPath = new File('~/Pictures/image-example.jpg');
	b.clear(b.page());
	b.noStroke();
	
	
	for ( i = 0; i < 10; i++) {

		b.image(imgPath, i*20, i*20); // only set position
		b.blendMode(imgPath, BlendMode.MULTIPLY);

	}
}

b.go();