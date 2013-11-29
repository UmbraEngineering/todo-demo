
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
