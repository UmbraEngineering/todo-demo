
var templates      = require('templates');
var _              = require('underscore');
var View           = require('cloak/view');
var SpinnerView    = require('./spinner');
var User           = require('../models/user');

var WelcomeView = module.exports = View.extend({

	className: 'welcome center-panel',
	template: templates['welcome'],

	events: {
		'click button.submit': 'submit'
	},

	initialize: function() {
		this.bind('onSubmit', 'onSubmitError');
	},

	draw: function() {
		this.$elem.html(this.render());

		this.$username              = this.$elem.find('input.username');
		this.$password              = this.$elem.find('input.password');
		this.$passwordConfirm       = this.$elem.find('input.password-confirm');
		this.$usernameError         = this.$elem.find('label.username .validation');
		this.$passwordError         = this.$elem.find('label.password .validation');
		this.$passwordConfirmError  = this.$elem.find('label.password-confirm .validation');
		this.$submit                = this.$elem.find('button.submit');

		// This is a jQuery object containing all inputs to be
		// enabled/disabled as actions occur
		this.$inputs = this.$username
			.add(this.$password)
			.add(this.$passwordConfirm)
			.add(this.$submit);

		// This is the loading spinner used when submitting the form
		this.spinner = new SpinnerView(this.$elem.find('.loading'), {
			lines: 10,
			length: 4,
			width: 2,
			radius: 5,
			color: '#444',
			speed: 1.3
		});

		this.bindEvents();
	},

// --------------------------------------------------------

	submit: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		if (this.validate()) {
			this.disable();
			this.spinner.draw();

			// Create the new user
			var user = new User({
				username: this.$username.val(),
				password: this.$password.val()
			});

			// Attempt to register the user with the server
			user.save().then(this.onSubmit, this.onSubmitError);
		}
	},

	onSubmit: function(req) {
		// 
		// TODO
		//  - Authenticate the new user
		//  - Redirect with router.redirectTo('/...')
		// 
	},

	onSubmitError: function(req) {
		// TODO: Handle errors
		if (false /* is validation error */) {
			// TODO: Show the error in the error fields
			this.enable();
			this.spinner.undraw();
		}
	},

// --------------------------------------------------------

	enable: function() {
		this.$inputs.prop('disabled', false);
	},

	disable: function() {
		this.$inputs.prop('disabled', true);
	},

// --------------------------------------------------------

	validate: function() {
		return this.validateUsername() && this.validatePassword() && this.validatePasswordConfirm();
	},

	validateUsername: function() {
		var username = this.$username.val();

		if (! username.length) {
			this.$usernameError.html('Please enter a username');
		} else if (username.length > 16) {
			this.$usernameError.html('Your username cannot be more than 16 characters long');
		} else {
			this.$usernameError.html('');
			return true;
		}

		return false;
	},

	validatePassword: function() {
		var password = this.$password.val();

		if (! password.length) {
			this.$passwordError.html('Please enter a password');
		} else if (password.length < 8 || password.length > 32) {
			this.$passwordError.html('Your password must be between 8 and 32 characters long');
		} else {
			this.$passwordError.html('');
			return true;
		}

		return false;
	},

	validatePasswordConfirm: function() {
		var password = this.$password.val();

		if (password !== this.$passwordConfirm.val()) {
			this.$passwordConfirmError.html('Your password and password confirmation must be the same');
		} else {
			this.$passwordConfirmError.html('');
			return true;
		}

		return false;
	}

});
