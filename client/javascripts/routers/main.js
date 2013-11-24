
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
