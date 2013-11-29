
var User   = require('./user');
var Model  = require('cloak/model');

var AuthToken = module.exports = Model.extend({

	url: '/auth-tokens{/#}',
	
	attributes: {
		token: '',
		user: User,
		expires: null
	}

});
