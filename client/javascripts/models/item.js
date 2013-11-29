
var Model = require('cloak/model');

var Item = module.exports = Model.extend({

	url: '/items{/#}',
	
	attributes: {
		value: '',
		finished: false
	}

});
