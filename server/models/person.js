
var User   = require('./user');
var Model  = require('dagger.js').require('model');

// 
// Define an example {Person < Model} class
// 
var Person = module.exports = Model.create('Person', {
	
	// Plural name for this model, used as the route URI; defaults to
	// {this.name.toLowerCase() + 's'}
	route: 'people',

	// Load the timestamps plugin, adding created and updated fields
	useTimestamps: true,

	// Define any mongoose options
	options: {
		strict: true
	},

	// Define the data schema
	schema: {
		name: String,
		email: Model.Types.Email
	},

	// Hook into mongoose to do some extra processing
	hooks: {
		'before::save': function() {
			// 
		}
	}

});
