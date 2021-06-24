#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  b.canvasMode(b.MARGIN);
  var d = b.doc();
  var r = b.rect(0, 0, b.width, b.height);
  var myGrad = d.gradients.add({type: GradientType.linear});

  myGrad.gradientStops[0].properties = {
    stopColor: b.color(b.random(0, 100), b.random(0, 100), b.random(0, 100), b.random(0, 100)),
    location: 0 // value must be between 0 and 100
  };

  myGrad.gradientStops[1].properties = {
    stopColor: b.color(b.random(0, 100), b.random(0, 100), b.random(0, 100), b.random(0, 100)),
    location: 100
  };

  r.fillColor = myGrad;
}

b.go();