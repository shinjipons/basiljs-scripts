#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	selItems = b.selections()[0];
	b.characters(selItems, function(w, n){
	  b.typo(w, "pointSize", n+1);
	});
}
b.go();