#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

  b.doc();
  b.text("Hello World", 100, 100, 200, 50);

}

b.go();