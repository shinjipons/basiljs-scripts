#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  b.canvasMode(b.MARGIN);
  b.noStroke();
  var d = b.doc();
  var columns = 100;
  var stepX = b.width/columns;
  for (var i = 0; i < 100; i++) {
    var posX = stepX * i;
    var posY = 0;
    var rectWidth = stepX;
    var rectHeight = b.height;
    
    var rectangle = b.rect(posX, posY, rectWidth, rectHeight);
    var myGrad = d.gradients.add({type: GradientType.LINEAR});

    myGrad.gradientStops[0].properties = {stopColor: b.color(0, 0, 0, 100), location: b.floor(b.random(0, 50))};

    myGrad.gradientStops[1].properties = {stopColor: b.color(100, 0, 0, 0), location: b.floor(b.random(50, 100))};

    rectangle.fillColor = myGrad;
  }
    
}

b.go(b.MODESILENT);