// Greeter.js

//es6
import config from '../json/config.json';
module.exports = function() {
	var greet = document.createElement('div');
	greet.textContent = config.greetText;
	return greet;
};






// 之前的语法   //es5
// var config = require('./config.json');
// module.exports = function() {
// 	var greet = document.createElement('div');
// 	greet.textContent = "Hi there and greetings!";
// 	return greet;
// };
