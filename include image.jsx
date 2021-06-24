#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  var imgPath = new File('~/Pictures/image-example.jpg');
  b.image(imgPath, 0, 0); // only set position
  b.image(imgPath, 200, 0, 200, 200); // also set size
}
b.go();