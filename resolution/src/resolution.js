/**
* Dsensor - Mapping Protocol Resolution
*
*  Main Mapping goal, best information predictions in context, Keep update to date and evolve. ..
*  
* @class mResolution
*
* @package    dsensor.og  open source project
* @copyright  Copyright (c) 2015 James Littlejohn
* @license    http://ww
* @version    $Id$
*/
var util = require('util');
var events = require("events");

var mResolution = function() {
console.log('resolution is live');
	events.EventEmitter.call(this);
	//this.emitResolution();
};

/**
* inherits core emitter class within this class
* @method 
*/
util.inherits(mResolution, events.EventEmitter);

/**
*  computationally active MPPM live
* @method computationallyActive		
*
*/	
mResolution.prototype.computationallyActive = function() {

	// those MPPM highest scoring for the resolution client
	// keep those containers computationally active 
	
	
	
};	

/**
*  update resolution
* @method updateResolution		
*
*/	
mResolution.prototype.updateResolution = function() {

	
	
};	

/**
*  order of Resolutions
* @method orderResolutions		
*
*/	
mResolution.prototype.orderResolution = function() {

	// list of MPPM per context and  states whether live, new, update, computationally active etc
	
	
};	

/**
*  scoring a Resolution
* @method scoreaggregateResolutions		
*
*/	
mResolution.prototype.aggregatescoreResolution = function() {

	// process new, update, on going computationally active resolutions  MPPM and  score
	
	
};

/**
*  emit message to API
* @method beginListening		
*
*/	
mResolution.prototype.emitResolution = function() {
console.log('mappping eevent called from mapping');
	// make method spec instance of this
	var localthis = this;

	// temporary time wait to simulate an event
	setTimeout(function(){
		
			localthis.emit("liveResolution",[['new', '123443231'], ['mapping resolution event', 'descriptions: making mapping talk to soul server'], ['scripting', 'temperature', 'activity'], ['sensorids', 's12', 's23'], ['units', 'temperature', 'steps'], ['notification', 'm-t-w-t-f-s-s']]);
		
	}
	,5400);
	
};

module.exports = mResolution;