#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	//laod and convert
	var data = b.CSV.decode( b.loadString("LA_Pools-Pools_per_Hood.csv") );
	for (var i = 0; i < data.length; i++) {
		data[i].poolcount = parseInt(data[i].poolcount);
	}

	//circles
	b.textSize(6); // this sets the text to 6point size
	b.textAlign(Justification.CENTER_ALIGN);
	b.units(b.MM); //this sets the units to millimeters

	var i = 0; //this is a different i variable because this one is global
	var gridUnitSize = 20; //use camelCase all the time!
	var paddingBottom = 3;

	for (var y = 0; y < 10; y++) {
		for (var x = 0; x < 14; x++) { // x are number of columns, y are number of rows
			var posX = x*gridUnitSize;
			var posY = y*gridUnitSize;

			var poolcount = data[i].poolcount;
			var radius = calcRadiusByArea(poolcount)*0.5; //scale down by half
			var diameter = radius*2;
			b.ellipse(posX, posY, diameter, diameter);

			var hoodname = data[i].hoodname;
			b.text(hoodname+"n"+poolcount, posX-gridUnitSize/2, posY+radius+2, 20, 10); //b.text("contents", x, y, width, height)

			//stop drawing if no more rows are available
			if (i > data.length) break;

			i++; // WTF is this for?
		};
	};
};

function calcRadiusByArea(A) {
	// A = Pi * r * r
	return Math.sqrt(A/Math.PI);
}

b.go();