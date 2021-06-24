#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	//load data
	var data = b.CSV.decode( b.loadString("LA_Pools-Pools_per_Hood.csv") );
	b.println("loaded "+data.length);
	b.println( data[2].hoodname ); // -> Beverly Hills
	b.println( data[2].poolcount ); // –> 2481
}

b.go();