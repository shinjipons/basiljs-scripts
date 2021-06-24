#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  b.canvasMode(b.MARGIN);
  var d = b.doc();
  var rows = 5;
  var columns = rows; // for some reason they have to be equal in this script
  var stepX = (b.width/2) /columns;
  var stepY = (b.height/2) /rows;
  var rectWidth = stepX;
  var rectHeight = stepY;
  var cellAmount = rows * columns;
  var c1 = b.color(69, 0, 100, 0);
  var c2 = b.color(12, 34, 77, 3);

  for (var k = 0; k < 4; k++) { // code runs four times
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        b.layer("quadrant " + k + 1)
        posX = stepX * i;
        posY = stepY * j;
        b.noStroke();
        var shapes = b.rect(posX, posY, rectWidth, rectHeight);
        var loc = (i + 1) * (j + 1);

        shapes.gradientFillAngle = b.floor( b.random(-180, 180) );

        // this is the code for the gradient
        var myGrad = d.gradients.add({type: GradientType.linear});

        myGrad.gradientStops[0].properties = {
          stopColor: c2,
          location: 0, // value must be between 0 and 100
        };

        myGrad.gradientStops[1].properties = {
          stopColor: c1,
          location: (loc / cellAmount) * 100,
          // location: 100,
        };

        shapes.fillColor = myGrad;
      }
    }
  }
}

b.go(b.MODESILENT);