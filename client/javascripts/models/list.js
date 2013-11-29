
var User   = require('./user');
var Item   = require('./item');
var Model  = require('cloak/model');

var List = module.exports = Model.extend({

	url: '/lists{/#}',
	
	attributes: {
		owner: User,
		items: Item.Collection
	}

});
