#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.rectMode(b.CORNER);
	b.noStroke();
	var rows = 20;
	var columns = 20;
	var xStep = b.width/rows;
	var yStep = b.height/columns;
	var side = 40;
	var c1 = b.color(100, 0, 0, 0);
	var c2 = b.color(0, 100, 0, 0);
	
	for (var y = 0; y < b.height; y = y + yStep) {
		for (var x = 0; x < b.width; x = x + xStep) {
			b.fill(b.lerpColor(c1, c2, i / (rows * columns)))
			var shapes1 = b.rect(x, y, side, side);
		};
	};
};

b.go(b.MODESILENT);