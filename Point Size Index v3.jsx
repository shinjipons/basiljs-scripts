#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);

	for (var size = 1; size < 50; size++) {
		var posY = b.map(size, 1, 50, 0, 0.999 * b.height);
		var myFrames = b.text("Openhaus Zurich", 300, posY, b.width, b.height);
		b.typo(myFrames, "appliedFont", 'Aktiv Grotesk\tRegular');
		b.typo(myFrames, "pointSize", size);

		var spacing = b.text(size, 10, posY, 30, 100);
		b.typo(spacing, "appliedFont", "Aktiv Grotesk\tRegular");
		b.typo(spacing, "pointSize", 6);
		b.typo(spacing, "fillColor", b.color(0, 100, 0, 0));
	}
}

b.go();
