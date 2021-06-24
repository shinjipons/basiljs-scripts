#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var cyan = b.color(100, 0, 0, 0);
	var magenta = b.color(0, 100, 0, 0);
	var yellow = b.color(0, 0, 100, 0);
	var key = b.color(0, 0, 0, 100);
	var myArray = [cyan, magenta, yellow, key];
	b.noFill();
	
	for ( var i = 0; i <= b.TWO_PI; i = i + b.TWO_PI/360) {
		b.strokeWeight(b.random(100, 200));
		var randomItem = myArray[b.floor(b.random(0, myArray.length)) ];
		b.stroke(randomItem);
		b.arc(b.width/2, b.height/2, 300, 300, i, i + b.TWO_PI/360);
	};
	
};

b.go();
