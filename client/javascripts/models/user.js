
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
