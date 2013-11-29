;require._modules["/models/auth-token.js"] = (function() { var __filename = "/models/auth-token.js"; var __dirname = "/models"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /models/auth-token.js  == */ var __module__ = function() { 
 
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
 
 }; /* ==  End source for module /models/auth-token.js  == */ return module; }());;