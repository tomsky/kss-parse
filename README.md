#kss-parse

Parse KSS, documentation syntax for CSS, and return as structured data. Originally forked from [kss-node](https://github.com/hughsk/kss-node).

##Usage

	var kss = require('kss-parse');
	kss.getSections('./scss/', { mask: '*.scss' }, function(err, styleguide) {
		console.log(styleguide);
		
		//Flatten one of the sections
		var section = kss.flattenSection(styleguide[8]);
		console.log(section);
	});
