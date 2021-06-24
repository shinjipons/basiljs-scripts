#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

    b.doc();
    b.println( b.width+" x "+b.height);

    for (var i = 0; i < 50; i++) {
        var x = b.random(180, 230);
        var y = b.random(280, 480);
        b.stroke(255,255,255);
        b.strokeWeight(b.random(1,7)); 
        var theLine1 = b.line(x,-100, x, y);
        theLine1.transparencySettings.blendingSettings.opacity=(b.random(1,80));
    }

    for (var i = 0; i < 400; i++) {
        var x = b.random(0, 405);
        var y = b.random(280, 580);
        b.stroke(255,255,255);
        b.strokeWeight(b.random(1,3)); 
        var theLine2 = b.line(205,-100, x, y);
        theLine2.transparencySettings.blendingSettings.opacity=(b.random(1,80));
    }
}

b.go();