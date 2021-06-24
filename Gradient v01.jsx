#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  b.canvasMode(b.MARGIN);
  var d = b.doc();
  var r = b.rect(0, 0, b.width, b.height);
  var myGrad = d.gradients.add({name: "Col " + (parseInt(Math.random() * 10000)), type: GradientType.linear});

  myGrad.gradientStops[0].properties = {
    stopColor: d.colors.item(2),
    location: Math.random() * 50
  };

  myGrad.gradientStops[1].properties = {
    stopColor: d.colors.item(4),
    location: 50 + Math.random() * 50
  };
  
  r.fillColor = myGrad;
}

b.go();