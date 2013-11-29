;require._modules["/templates.js"] = (function() { var __filename = "/templates.js"; var __dirname = "/"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /templates.js  == */ var __module__ = function() { 
 var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["exports"] = this["exports"] || {};

this["exports"]["footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"copyright\">\n	Copyright &copy; ";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.year); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " <a href=\"http://www.umbraengineering.com\">Umbra Engineering LLC</a>\n</div>\n<div class=\"using\">\n	Developed using <a href=\"https://github.com/UmbraEngineering/cloak\">cloak.js</a> and <a href=\"https://github.com/UmbraEngineering/dagger\">dagger.js</a>\n</div>\n<div class=\"license\">\n	This demo app is Public Domain (<a href=\"https://github.com/UmbraEngineering/todo-demo\">source code</a>)\n</div>\n<div class=\"license\">\n	The contained libraries are licensed under their own designated licenses\n</div>";
  return buffer;
  });

this["exports"]["login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel\">\n	<h2>Login</h2>\n	<div>\n		<ul class=\"errors\"></ul>\n		<form>\n			<label>Username:<br />\n				<input type=\"text\" class=\"username\" />\n			</label>\n			\n			<label>Password:<br />\n				<input type=\"password\" class=\"password\" />\n			</label>\n			\n			<button class=\"submit small\">Login</button>\n		</form>\n		<p class=\"small\">Don't have an account? <a href=\"/welcome\" rel=\"internal\">Create an Account</a></p>\n	</div>\n</div>";
  });

this["exports"]["not-found"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n		<li><a href=\"/lists\" rel=\"internal\">View your lists</a></li>\n	";
  }

function program3(depth0,data) {
  
  
  return "\n		<li><a href=\"/login\" rel=\"internal\">Login</a></li>\n		<li><a href=\"/welcome\" rel=\"internal\">Create a new account</a></li>\n	";
  }

  buffer += "<div class=\"panel\">\n	<h2>Error 404: Not Found</h2>\n	<p>\n		We couldn't find what you were looking for. Perhaps try one of these:\n	</p>\n	<ul>\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isLoggedIn), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n</div>";
  return buffer;
  });

this["exports"]["welcome"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel\">\n	<h2>Welcome! :D</h2>\n	<div>\n		<p>To create an account, just fill in a username and password:</p>\n		<form>\n			<label class=\"username\">Username: <span class=\"validation\"></span><br />\n				<input type=\"text\" class=\"username\" placeholder=\"Your login (1-16 characters)\" />\n			</label>\n			\n			<label class=\"password\">Password: <span class=\"validation\"></span><br />\n				<input type=\"password\" class=\"password\" placeholder=\"Your password (8-32 characters)\" />\n			</label>\n			\n			<label class=\"password-confirm\">Confirm Password: <span class=\"validation\"></span><br />\n				<input type=\"password\" class=\"password-confirm\" placeholder=\"Your password again\" />\n			</label>\n\n			<button class=\"submit small\">Create Account</button>\n			<span class=\"loading\"></span>\n		</form>\n		<p class=\"small\">Already have an account? <a href=\"/login\" rel=\"internal\">Login</a></p>\n	</div>\n</div>";
  });

if (typeof exports === 'object' && exports) {module.exports = this["exports"];} 
 }; /* ==  End source for module /templates.js  == */ return module; }());;
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
;require._modules["/models/user.js"] = (function() { var __filename = "/models/user.js"; var __dirname = "/models"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /models/user.js  == */ var __module__ = function() { 
 
var cloak      = require('cloak');
var $          = require('jquery');
var cookies    = require('cookies');
var Model      = require('cloak/model');
var List       = require('./list');
var AuthToken  = require('./auth-token');

var User = module.exports = Model.extend({

	url: '/users{/#}',
	
	// 
	// Users also have a password field that can be set and sent to
	// the server to set/change their password, but we don't list
	// that in the model so we don't constantly overwrite it with
	// the default.
	// 
	attributes: {
		username: ''
	},

	// 
	// Login in this user with the given password, and stores the
	// credentials for use with other requests
	// 
	login: function(password) {
		// 
		// TODO
		// 
	},

	// 
	// Fetch a collection of the lists belonging to this user
	// 
	loadLists: function() {
		var lists = new List.Collection();
		return lists.load({
			filter: {owner: this.id()}
		});
	}

});

// --------------------------------------------------------

// 
// If a user is currently logged in, it will be fetched from the server, stored
// at {cloak.auth.user}, and returned. Otherwise, the promise will be rejected.
// 
User.getLoggedIn = function() {
	var deferred = $.Deferred();

	// If we already have a current user, we can just hand it off
	if (cloak.auth.user) {
		return deferred.resolve(cloak.auth.user).promise();
	}

	// Check both {cloak.auth.token} and the auth token cookie for a token
	if (! cloak.auth.token) {
		if (! (cloak.auth.token = cookies.get('todoauthtoken'))) {
			return deferred.reject().promise();
		}
	}

	// If the {cloak.auth.token} is a string, create an AuthToken model
	if (typeof cloak.auth.token === 'string') {
		cloak.auth.token = new AuthToken({
			token: cloak.auth.token
		});
	}

	// Load the token from the server to authenticate it and get user info
	cloak.auth.token.load().then(
		// Once we have the token, take the user ID from it and load the user
		function(req) {
			cloak.auth.user = token.user;
			cloak.auth.user.load().then(function() {
				deferred.resolve(cloak.auth.user);
			});
		},
		// If there is an error loading the token, clear out the token and reject
		function(req) {
			cloak.auth.user = null;
			cloak.auth.token = null;
			cookies.expire('todoauthtoken');
			deferred.reject();
		});

	return deferred.promise();
};
 
 }; /* ==  End source for module /models/user.js  == */ return module; }());;
;require._modules["/views/footer.js"] = (function() { var __filename = "/views/footer.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/footer.js  == */ var __module__ = function() { 
 
var $              = require('jquery');
var templates      = require('templates');
var View           = require('cloak/view');

var FooterView = module.exports = View.extend({

	template: templates['footer'],

	initialize: function() {
		this.$elem = $('#footer');
	},

	draw: function() {
		this.$elem.html(this.render({
			year: (new Date()).getFullYear()
		}));
	}

});
 
 }; /* ==  End source for module /views/footer.js  == */ return module; }());;
;require._modules["/views/lists.js"] = (function() { var __filename = "/views/lists.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/lists.js  == */ var __module__ = function() { 
 
var View = require('cloak/view');

var ListsView = module.exports = View.extend({

	// 

});
 
 }; /* ==  End source for module /views/lists.js  == */ return module; }());;
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
;require._modules["/views/not-found.js"] = (function() { var __filename = "/views/not-found.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/not-found.js  == */ var __module__ = function() { 
 
var templates  = require('templates');
var View       = require('cloak/view');

var NotFoundView = module.exports = View.extend({

	className: '404 center-panel',
	template: templates['not-found'],

	draw: function() {
		this.$elem.html(this.render({
			isLoggedIn: !! cloak.auth.user
		}));
	}

});
 
 }; /* ==  End source for module /views/not-found.js  == */ return module; }());;
;require._modules["/views/spinner.js"] = (function() { var __filename = "/views/spinner.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/spinner.js  == */ var __module__ = function() { 
 
var jQuery   = require('jquery');
var View     = require('cloak/view');

// Load the spin.js jQuery plugin
require('jquery.spin');

var SpinnerView = module.exports = View.extend({

	initialize: function(elem, preset, color) {
		// Override the default $elem with the given one, if one is given
		if (elem) {
			if (! (elem instanceof jQuery)) {
				elem = $(elem);
			}
			this.$elem = elem;
		}

		// Store the options to be used when creating a spinner
		if (typeof preset === 'object' && preset) {
			this.opts = preset;
		} else {
			this.preset = preset;
			this.color = color;
		}
	},

	drawn: false,

	draw: function(preset, color) {
		if (! this.drawn) {
			this.spinner = this.$elem.spin(preset || this.opts || this.preset, color || this.color);
			this.drawn = true;
		}
	},

	undraw: function() {
		if (this.spinner && this.drawn) {
			this.spinner.stop();
			this.drawn = false;
		}
	}

});
 
 }; /* ==  End source for module /views/spinner.js  == */ return module; }());;
;require._modules["/views/welcome.js"] = (function() { var __filename = "/views/welcome.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/welcome.js  == */ var __module__ = function() { 
 
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
 
 }; /* ==  End source for module /views/welcome.js  == */ return module; }());;
;require._modules["/routers/main.js"] = (function() { var __filename = "/routers/main.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/main.js  == */ var __module__ = function() { 
 
var $            = require('jquery');
var cloak        = require('cloak');
var Router       = require('cloak/router');
var LoginView    = require('views/login');
var FooterView   = require('views/footer');
var WelcomeView  = require('views/welcome');
var User         = require('models/user');

var MainRouter = module.exports = Router.extend({

	routes: {
		'/':           'root',
		'/welcome':    'welcome',
		'/login':      'login',
		'/lists':      'lists',
		'/lists/:id':  'list'
	},

	initialize: function() {
		this.$content = $('#content');

		// Make links in the content area redirect with the router
		this.bind('redirectAnchors');
		this.$content.on('click', 'a[rel=internal]', this.redirectAnchors);

		// Handle 404 errors
		this.bind('notfound');
		this.on('notfound', this.notfound);

		// Draw the footer
		(new FooterView()).draw();
	},

// --------------------------------------------------------
	
	// 
	// "/"
	// 
	// Redirects to "/welcome" or "/lists" depending on whether or not
	// there is a logged in user
	// 
	root: function() {
		var router = this;
		User.getLoggedIn().then(
			function(user) {
				router.redirectTo('/lists');
			},
			function() {
				router.redirectTo('/welcome');
			});
	},

	// 
	// "/welcome"
	// 
	// Displays a welcome/registration screen
	// 
	welcome: function() {
		var router = this;
		User.getLoggedIn().then(
			function(user) {
				router.redirectTo('/lists');
			},
			function() {
				router.drawViewToContent(new WelcomeView());
			});
	},

	// 
	// "/login"
	// 
	// Displays a login screen
	// 
	login: function() {
		var router = this;
		User.getLoggedIn().then(
			function(user) {
				router.redirectTo('/lists');
			},
			function() {
				router.drawViewToContent(new LoginView());
			});
	},

	// 
	// "/lists"
	// 
	// Displays a list of the logged in user's todo lists
	// 
	lists: function() {
		var router = this;
		User.getLoggedIn().then(
			function(user) {
				user.getLists().then(function() {
					router.drawViewToContent(new ListsView({ lists: this }));
				});
			},
			function() {
				router.redirectTo('/login');
			});
	},

	// 
	// "/list/:id"
	// 
	// Displays a specific todo list
	// 
	list: function(params) {
		var router = this;
		User.getLoggedIn().then(
			function(user) {
				// 
			},
			function() {
				router.redirectTo('/login');
			});
	},

// --------------------------------------------------------
	
	// 
	// Handles all unknown routes
	// 
	notfound: function(state) {
		this.drawViewToContent(new NotFoundView());
	},

// --------------------------------------------------------
	
	// 
	// Event function that handle anchor clicks
	// 
	redirectAnchors: function(evt) {
		evt.preventDefault();
		this.redirectTo(evt.target.getAttribute('href'));
	},

	// 
	// Draws a simple view instance to the content area with a small animation
	// 
	drawViewToContent: function(view, callback) {
		var $content = this.$content;

		// Fade out the current content
		$content.animate({ opacity: 0 }, 600, function() {
			// Remove the current content
			$content.html('');

			// Draw the new view
			view.draw();
			view.$elem.appendTo($content);

			// Fade in the new content
			$content.animate({ opacity: 100 }, 600, function() {
				// Call any callback that was given
				if (callback) {
					callback();
				}
			});
		});
	}

});
 
 }; /* ==  End source for module /routers/main.js  == */ return module; }());;