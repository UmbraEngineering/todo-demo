;require._modules["/models/list.js"] = (function() { var __filename = "/models/list.js"; var __dirname = "/models"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /models/list.js  == */ var __module__ = function() { 
 
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
 
 }; /* ==  End source for module /models/list.js  == */ return module; }());;