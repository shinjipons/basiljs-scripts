#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	var fontSize = 18;
	var myText = "How to make PestonnIngredientsnn3 cups fresh basil leavesn1/2 cup toasted pine nutsn1/2 cup pecorino romano cheese (grated)n1/2 cup parmesan cheese (grated)n3 cloves fresh garlicn2/3 cup olive oil (or more)nnnThe pesto is fantastic in pasta dishes. For a great appetizer or snack add two tablespoons to 1.5 cups of hummus mix well and serve with vegetables and pita bread.nIf you are hardcore you can throw on a toga and make this with a huge mortar and pestle. Personally, I use a blender. (And I'm sure a food processor would be even more convenient.)nToast the pine nuts lightly in a 350F/177C oven. Let cool.nChop up the basil (if the leaves are large) and push all the basil to the bottom of the blender. Add olive oil and pulse blend with the basil. Use a chopstick or spatula to keep scraping the sides down and compressing all the ingredients.nAdd the garlic cloves, more oil, pulse and scrape.nThen add the pine nuts, more oil, keep blending and scraping.nAdd all the cheese, and add the rest of the oil (or extra oil).nBlend well until all the ingredients are homogenized. I enjoy a pesto paste, which requires less oil, but if you prefer more of a sauce texture, you can add as much oil as necessary. The pesto should be a bright green. As it oxidizes, it will turn a darker shade of green.nStore in an air-tight 16 fl oz/474 ml jar. Will keep for up to a month. (I've never tried freezing it, but if anyone does so successfully, let me know.)nn http://www.opensourcefood.com/people/chunlei/recipes/pestonThis work is licensed under a Creative Commons Attribution-Share Alike 3.0 License";

	b.textSize(fontSize);

	var tempFrame = b.text(myText, 0,0, b.width, b.height);     
	var imgPath = new File('~/Pictures/image-example.jpg'); // path to image
	
	// search for all those b's!
	b.characters(tempFrame, function (ch) {
		if(ch.contents == 'b'){
			var chbounds = b.bounds(ch);
			myImg = b.image(imgPath, chbounds.left, chbounds.top, chbounds.height, chbounds.height);
			myImg.strokeWeight=0;
			b.blendMode(myImg, BlendMode.MULTIPLY);
			ch.contents = '   ';
		}
	});     
}
b.go();