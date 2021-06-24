#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var n = 100;

	b.translate( 0, b.height/2 );
	b.noFill();

	for ( var j = 0; j < 50; j++) {
		b.beginShape();
		for(var i = 0; i < n; i++) {
			b.vertex( 
				b.map(i, 0, n, 0, b.width),
				b.map(b.noise( i/100 ), 0, 1, -b.height/2, b.height/2)
			);
		}
		b.endShape();
	};
}

b.go();