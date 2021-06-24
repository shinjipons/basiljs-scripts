#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  b.canvasMode(b.MARGIN);
  var d = b.doc(); // do not delete
  var c1 = b.color(69, 0, 100, 0);
  var c2 = b.color(12, 34, 77, 3);

  for (var k = 0; k < 30; k++) { 
    b.noStroke();
    var shapes = b.rect(0, 0, b.width, b.height);
    shapes.gradientFillAngle = b.floor(b.random(-180, 180));

    // this is the code for the gradient
    var myGrad = d.gradients.add({type: GradientType.linear});

    myGrad.gradientStops[0].properties = {
      stopColor: c2,
      location: 0, // value must be between 0 and 100
    };

    myGrad.gradientStops[1].properties = {
      stopColor: c1,
      location: b.floor(b.random(0, 100)),
    };

    shapes.fillColor = myGrad;

    b.blendMode(shapes, BlendMode.OVERLAY);
  }
}

b.go(b.MODESILENT);