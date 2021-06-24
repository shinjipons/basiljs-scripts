#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  b.canvasMode(b.MARGIN);
  var d = b.doc();
  var rows = 10;
  var columns = 10;
  var stepX = b.width/columns;
  var stepY = b.height/rows;
  var rectWidth = stepX;
  var rectHeight = stepY;

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      posX = stepX * i;
      posY = stepY * j;
      b.noStroke();
      var shapes = b.rect(posX, posY, rectWidth, rectHeight);

      var myGrad = d.gradients.add({type: GradientType.linear});

      myGrad.gradientStops[0].properties = {
        stopColor: b.color(b.random(0, 100), b.random(0, 100), b.random(0, 100), b.random(0, 100)),
        location: 0 // value must be between 0 and 100
      };

      myGrad.gradientStops[1].properties = {
        stopColor: b.color(b.random(0, 100), b.random(0, 100), b.random(0, 100), b.random(0, 100)),
        location: 100
      };

      shapes.fillColor = myGrad;
    }
  }
}

b.go(b.MODESILENT);