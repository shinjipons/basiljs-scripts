#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.noFill();
	b.stroke(0,255,0);

	b.canvasMode(b.MARGIN);
	b.rect(0,0,b.width,b.height);

	b.canvasMode(b.PAGE);
	b.rect(0,0,b.width,b.height);
	
	b.canvasMode(b.BLEED);
	b.rect(0,0,b.width,b.height);    

	 //  the following examples only work for documents with facing pages

	 b.canvasMode(b.FACING_MARGINS); 
	 b.rect(0,0,b.width,b.height);

	 b.canvasMode(b.FACING_PAGES);
	 b.rect(0,0,b.width,b.height);

	 b.canvasMode(b.FACING_BLEEDS); 
	 b.rect(0,0,b.width,b.height);

}
b.go();
