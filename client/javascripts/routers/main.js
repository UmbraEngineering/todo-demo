
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
