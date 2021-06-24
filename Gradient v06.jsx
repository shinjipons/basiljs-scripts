#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  b.noStroke();
  b.canvasMode(b.MARGIN);
  var d = b.doc();
  var rows = 100;
  var stepY = b.height/rows;
  for (var i = 0; i < rows; i++) {
    var posY = stepY * i;
    var posX = 0;
    var rectWidth = b.width;
    var rectHeight = stepY;
    
    var rectangle = b.rect(posX, posY, rectWidth, rectHeight);
    var myGrad = d.gradients.add({type: GradientType.LINEAR});

    myGrad.gradientStops[0].properties = {stopColor: b.color(0, 0, 0, 100), location: b.floor(b.random(0, 50))};

    myGrad.gradientStops[1].properties = {stopColor: b.color(100, 0, 0, 0), location: b.floor(b.random(50, 100))};

    rectangle.fillColor = myGrad;
  }
    
}

b.go(b.MODESILENT);