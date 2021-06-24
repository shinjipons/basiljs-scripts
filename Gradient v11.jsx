#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  b.canvasMode(b.MARGIN);
  b.noStroke();
  var d = b.doc();
  var columns = 30;
  var stepX = b.width/columns;
  for (var i = 0; i < columns; i++) {
    var posX = stepX * i;
    var posY = 0;
    var rectHeight = b.height;
    var rectWidth = stepX;
    var rectangle = b.rect(posX, posY, rectWidth, rectHeight);
    var myGrad = d.gradients.add({
      type: GradientType.LINEAR,
    });

    // placing gradientFillAngle before or after the main code has great consequences
    rectangle.gradientFillAngle = 90;

    var randomC1 = b.random(80, 100);
    var randomM1 = b.random(6, 70);
    var randomY1 = b.random(0, 200);
    var randomK1 = 0;

    var randomC2 = b.random(40, 60);
    var randomM2 = b.random(0, 10);
    var randomY2 = b.random(6, 100);
    var randomK2 = 0;

    myGrad.gradientStops[0].properties = {
      stopColor: b.color(randomC1, randomM1, randomY1, randomK1),
      location: 0,
    };

    myGrad.gradientStops[1].properties = {
      stopColor: b.color(randomC2, randomM2, randomY2, randomK2),
      location: b.random(70, 100),
    };

    rectangle.fillColor = myGrad; 
  }
}

b.go(b.MODESILENT);