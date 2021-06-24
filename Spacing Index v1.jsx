#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var step = b.height/40;

	for (var posY = 0; posY <= b.height; posY = posY + step) {
		var myFrames = b.text("Things a designer would not think of doing. Because their mind dismisses something before they even try it.", 200, posY, b.width, 25);
		var mapped = b.floor(b.map(posY, 0, b.height, -1000, 1000));
		b.typo(myFrames, "tracking", mapped);
		b.typo(myFrames, "appliedFont", 'Aktiv Grotesk\tRegular');
		b.typo(myFrames, "pointSize", 12);

		var index = mapped;
		var spacing = b.text("Spacing: " + index, 70, posY, 100, 200);
		b.typo(spacing, "appliedFont", "Aktiv Grotesk\tRegular");
		b.typo(spacing, "pointSize", 6);
		b.typo(spacing, "fillColor", b.color(0, 100, 0, 0));
	}
}

b.go();
