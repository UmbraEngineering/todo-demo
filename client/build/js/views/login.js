;require._modules["/views/login.js"] = (function() { var __filename = "/views/login.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/login.js  == */ var __module__ = function() { 
 
var _          = require('underscore');
var templates  = require('templates');
var View       = require('cloak/view');

var LoginView = module.exports = View.extend({

	className: 'login center-panel',
	template: templates['login'],

	events: {
		'click button.submit': 'submit'
	},

	draw: function() {
		this.$elem.html(this.render());

		// Keep a reference to these elements for later use
		this.$username  = this.$elem.find('input.username');
		this.$password  = this.$elem.find('input.password');

		this.bindEvents();
	},

	validate: function() {
		var username = this.$username.val();
		var password = this.$password.val();

		var errors = [ ];

		if (! username.length) {
			errors.push('Please enter a username');
		}

		if (! password.length) {
			errors.push('Please enter a password');
		}

		if (errors.length) {
			errors = _.map(errors, function(error) {
				return '<li>' + error + '</li>';
			});

			this.$errors.html(errors);

			return false;
		}

		return true;
	},

	submit: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		if (this.validate()) {
			// 
			// TODO
			//  - Disable form fields and submit button
			//  - Show a spinner
			//  - Authenticate the new user
			//  - Redirect with router.redirectTo('/...')
			// 
		}
	}

});
 
 }; /* ==  End source for module /views/login.js  == */ return module; }());;