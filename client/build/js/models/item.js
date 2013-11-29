;require._modules["/models/item.js"] = (function() { var __filename = "/models/item.js"; var __dirname = "/models"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /models/item.js  == */ var __module__ = function() { 
 
var Model = require('cloak/model');

var Item = module.exports = Model.extend({

	url: '/items{/#}',
	
	attributes: {
		value: '',
		finished: false
	}

});
 
 }; /* ==  End source for module /models/item.js  == */ return module; }());;