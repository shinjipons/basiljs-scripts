#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  b.canvasMode(b.MARGIN);
  var d = b.doc();
  var rows = 5;
  var columns = 5;
  var stepX = b.width/columns;
  var stepY = b.height/rows;
  var rectWidth = stepX;
  var rectHeight = stepY;
  var cellAmount = rows * columns;
  var c1 = b.color(100, 23, 4, 0);
  var c2 = b.color(4, 90, 44, 3);

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      var mappedAngle = b.map(loc / cellAmount, 0, 1, -180, 180);
      shapes.gradientFillAngle = mappedAngle;
      posX = stepX * i;
      posY = stepY * j;
      b.noStroke();
      var shapes = b.rect(posX, posY, rectWidth, rectHeight);
      var loc = (i + 1) * (j + 1);

      // this is the code for the gradient
      var myGrad = d.gradients.add({type: GradientType.linear});

      myGrad.gradientStops[0].properties = {
        stopColor: c1,
        location: 0, // value must be between 0 and 100
      };

      myGrad.gradientStops[1].properties = {
        stopColor: c2,
        location: (loc / cellAmount) * 100,
      };

      shapes.fillColor = myGrad;
    }
  }
}

b.go(b.MODESILENT);