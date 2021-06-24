#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  b.canvasMode(b.MARGIN);
  b.noStroke();
  var d = b.doc();
  for (var i = 0; i < 100; i++) {
    var rectWidth = b.random(0, b.width);
    var rectHeight = b.random(0, b.height);
    var posX = b.random(0, b.width);
    var posY = b.random(0, b.height);
    var r = b.rect(posX, posY, rectWidth, rectHeight);
    var myGrad = d.gradients.add({type: GradientType.LINEAR});

    myGrad.gradientStops[0].properties = {
      stopColor: b.color(0, 0, 0, 100), // should be black!
      location: 0 // has to be between 0 and 100
    };

    myGrad.gradientStops[1].properties = {
      stopColor: b.color(100, 0, 0, 0), // should be cyan
      location: 100
    };

    r.fillColor = myGrad;
  }
    
}

b.go(b.MODESILENT);