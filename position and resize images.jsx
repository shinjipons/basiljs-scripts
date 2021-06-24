#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  //b.image('image-example.jpg', 0, 0);

  for ( i = 0; i < 200; i++) {
  	b.noStroke(img);
  	var x = b.random(0, b.width);
  	var y = b.random(0, b.height);
  	var img = b.image('image-example.jpg', x, y); 
	b.blendMode(img, BlendMode.MULTIPLY);
    b.opacity(img, 50); // from 0 - 100
  }
  
}
b.go();