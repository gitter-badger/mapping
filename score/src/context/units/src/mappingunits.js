/**
*  Dsensor - Mapping fundamental measurement units
*
* The accepted units of measurement active on the protocol

* @class mappingUnits
*
* @package    Dsensor.org open source project
* @copyright  Copyright (c) 2012 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
* @version    $Id$
*/
var util = require('util');
var events = require("events");

var mappingUnits = function() {

	events.EventEmitter.call(this);
	this.fundamentalUnits();

};

/**
* inherits core emitter class within this class
* @method 
*/
util.inherits(mappingUnits, events.EventEmitter);

/**
*  Founding Units of Measurement
* @method fundamentalUnits		
*
*/	
mappingUnits.prototype.fundamentalUnits = function() {
	
	var fundamentalUnits = {};
		
	fundamentalUnits.time = {'kword':'second','ksymbol':'s'};
	fundamentalUnits.length = {'kword':'metre','ksymbol':'m'};
	fundamentalUnits.mass = {'kword':'kilogram','ksymbol':'kg'};
	fundamentalUnits.electriccurrent = {'kword':'ampre','ksymbol':'A'};
	fundamentalUnits.temperature = {'kword':'temperature','ksymbol':'K'};	
	fundamentalUnits.luminousintensity = {'kword':'candela','ksymbol':'cd'};
	fundamentalUnits.amountsubstance = {'kword':'mole','ksymbol':'mol'};	

};


module.exports = mappingUnits;