﻿#includepath "~/Documents/;%USERPROFILE%Documents";#include "basiljs/bundle/basil.js";function draw() {      b.println( "width " + b.width );  b.println( "height " + b.height );    b.rect(0,0,b.width,b.height);  };b.go();