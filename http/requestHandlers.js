/**
*  Dsensor - SoulServer
*
* deals with site requests
* @class requestHandler
* @package   Dsensor.org opensource project
* @copyright  Copyright (c) 2012 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
* @version    $Id$
*/
var querystring = require("querystring");
var fs = require("fs");
var util = require('util');
var http = require('http');

/**
* loads up home HTML page
* @method start
*
*/
function start(fullpath, response) {
  console.log("Request handler 'start' was called.");

	var data  = '';

	fs.readFile('./index.html', function(err, data) {
		response.setHeader('Access-Control-Allow-Origin', '*');
		response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		response.writeHead(200, {"Content-Type": "text/html"});

	  response.end(data);
	});	
     
}



/**
*  simple return of data via CORS proceedure
* @method dataCors
*
*/
function resolution(fullpath, response, request) {
console.log("Resolution");	

	var origin = (request.headers.origin || "*");

	correctpwd = {"resolution":"active"};
	checkjson = JSON.stringify(correctpwd);
	response.setHeader("access-control-allow-origin", origin);
	response.writeHead(200, {"Content-Type": "application/json"});
	response.end(checkjson);		

};


exports.start = start;
exports.resolution = resolution;
