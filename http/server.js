/**
*  Dsensor - http REST API
*
*   extract and speak to MAPPING PROTOCOL
*
* @package    Dsensor.org open source project
* @copyright  Copyright (c) 2012 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
* @version    $Id$
*/
var http = require("http");
var url = require("url");
var fs = require('fs');
var util = require('util');
//var settings = require("./settings");

/**
* controls start of node.js server
* @method start
*
*/
function start(route, handle) {

				
	var app = http.createServer(onRequest).listen(8886);
		
	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;
  
//console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);
	};
	
		
		
} // closes start function 


exports.start = start;
