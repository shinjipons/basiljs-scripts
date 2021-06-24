#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
	var step = b.height/40;

	for (var posY = 0; posY <= b.height; posY = posY + step) {
		var myFrames = b.text("Openhaus Zurich", 200, posY, b.width, b.height);
		var mapped = b.floor(b.map(posY, 0, b.height, 1, 300));
		b.typo(myFrames, "appliedFont", 'Aktiv Grotesk\tRegular');
		b.typo(myFrames, "pointSize", mapped);

		var index = mapped;
		var spacing = b.text(index, 10, posY, 30, 100);
		b.typo(spacing, "appliedFont", "Aktiv Grotesk\tRegular");
		b.typo(spacing, "pointSize", 6);
		b.typo(spacing, "fillColor", b.color(0, 100, 0, 0));
	}
}

b.go();
