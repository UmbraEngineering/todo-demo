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
;require._modules["/views/welcome.js"] = (function() { var __filename = "/views/welcome.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/welcome.js  == */ var __module__ = function() { 
 
var View = require('cloak/view');

// 
// WelcomeView
// 
var WelcomeView = module.exports = View.extend({

	draw: function() {
		this.$elem.html('<h1>Welcome! :D</h1>');
	}

});
 
 }; /* ==  End source for module /views/welcome.js  == */ return module; }());;
;require._modules["/routers/main.js"] = (function() { var __filename = "/routers/main.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/main.js  == */ var __module__ = function() { 
 
var $            = require('jquery');
var Router       = require('cloak/router');
var WelcomeView  = require('views/welcome');

var MainRouter = module.exports = Router.extend({

	routes: {
		'/':         'welcome',
		'/welcome':  'welcome'
	},

	initialize: function() {
		this.$wrapper = $('#wrapper');

		// Handle 404 errors
		this.bind('notfound');
		this.on('notfound', this.notfound);
	},

	welcome: function() {
		// Create a new welcome view
		var welcome = new WelcomeView();

		// Empty out the rendering area
		this.$wrapper.html('');

		// Draw the view
		welcome.draw();
		welcome.$elem.appendTo(this.$wrapper);
	},

	notfound: function(state) {
		// Show a 404 error
		this.$wrapper.html('<h3>404: ' + state.href + '</h3>');
	}

});
 
 }; /* ==  End source for module /routers/main.js  == */ return module; }());;