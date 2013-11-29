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