#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.units(b.PT);
	b.colorMode(b.CMYK);
	var c1 = b.color(100, 0, 0, 0); //process cyan
	var c2 = b.color(0, 100, 0, 0); //process magenta

	var w = b.width/2;
	var h = b.height/2;


	for (var y = 0; y < b.height; y = y + h) {
		for (var x = 0; x < b.width; x = x + w) {

			//var loc = x + y * b.width;  //doesnt work
			//var loc = y + x * b.height; //doesnt work
			//var loc = x + y * b.height; //doesnt work
			var loc = x * b.height + y * b.width;
			var locMax = 800000;
			var mappedValue = b.map(loc, 0, locMax, 0, 1);

			b.rectMode(b.CORNER);
			b.noStroke();
			
			
			var lerpedColor = b.lerpColor(c1, c2, mappedValue);
			b.fill(lerpedColor);
			b.rect(x, y, w, h);
					
		};
	};

};

b.go();
