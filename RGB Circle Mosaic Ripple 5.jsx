#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.colorMode(b.CMYK);
	var c1 = b.color(100, 0, 0, 0);
	var c2 = b.color(0, 100, 0, 0);
	var c3 = b.color(0, 0, 100, 0);
	var c4 = b.color(0, 0, 0, 100);
	var myArray = [c1, c2, c3];

	var margin = 30;

	for ( var i = 0; i < b.width; i = i + margin) {
		// this controls the distance between each column
		for ( var j = 0; j < 30; j++) {
			// execute this code 4 times
			// think of it as layers of circles
			
			var randomHeight = b.random(0, b.height);
			var radius = b.random(3, 45);

			var randomItem = myArray[b.floor(b.random(0, myArray.length)) ];

			var posX = i;

			b.ellipseMode(b.CENTER);
			b.stroke(b.color(0, 0, 0, 0));
			b.fill(randomItem);
			var shapes = b.ellipse(posX, randomHeight, radius, radius);
			b.blendMode(shapes, BlendMode.DARKEN);
		};
	};
};

b.go(b.MODESILENT);