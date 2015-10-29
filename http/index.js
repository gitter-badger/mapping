/**
* Dsensor - SoulServer
*
* Handles file serves
*
* @property handle
* @type {Object}
* @package    Dsensor.org open source project
* @copyright  Copyright (c) 2015 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
* @version    v0.1
*/
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var util = require('util');
var handle = {};
handle["/"] = requestHandlers.start;
handle["/resolution"] = requestHandlers.resolution;

	
server.start(router.route, handle);

