;require._modules["/models/foo.js"] = (function() { var __filename = "/models/foo.js"; var __dirname = "/models"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /models/foo.js  == */ var __module__ = function() { 
 
var Item   = require('./item');
var Model  = require('cloak/model');

var Foo = Model.extend({

	url: '/foos{/#}',
	
	attributes: {
		items: Item.Collection.$unique
	}

});
 
 }; /* ==  End source for module /models/foo.js  == */ return module; }());;