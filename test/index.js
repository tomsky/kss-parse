var kss  = require('../lib/kss');
var _ = require('lodash-node');

kss.getSections('fixtures/', { mask: '*.scss' }, function(err, styleguide){
    if (err) throw err;

    _.forEach(styleguide, function(val, key){
        var sections = kss.flattenSection(val);
        console.log( sections );
    });

});
