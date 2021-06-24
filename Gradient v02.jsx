#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  b.canvasMode(b.MARGIN);
  b.noStroke();
  var d = b.doc();
  for (var i = 0; i < 100; i++) {
    var rectWidth = b.map(i, 0, 100, b.width, 10);
    var rectHeight = b.map(i, 0, 100, b.height, 10);
    var r = b.rect(0, 0, rectWidth, rectHeight);
    var myGrad = d.gradients.add({name: "Col " + (parseInt(Math.random() * 10000)), type: GradientType.RADIAL});

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
    
}

b.go(b.MODESILENT);