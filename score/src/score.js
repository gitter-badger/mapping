/**
* Dsensor - Mapping Protocol Score
*
*  Evaluate a MNM prediction path and normalize context for comparion
*  
* @class mScore
*
* @package    dsensor.og  open source project
* @copyright  Copyright (c) 2015 James Littlejohn
* @license    http://ww
* @version    $Id$
*/
var mScore = function() {

	
};

/**
*  scoring a PP produced by MNM
* @method ppscoring		
*
*/	
mScore.prototype.ppscoring = function() {

	// assume sensor data 
	actualdata =  [[ 2, 9.666666666666666 ],  [ 3, 11.166666666666666 ],  [ 4, 12.666666666666666 ],  [ 5, 14.166666666666666 ],  [ 6, 15.666666666666666 ],  [ 7, 17.166666666666664 ],  [ 8, 18.666666666666664 ],  [ 9, 20.166666666666664 ],  [ 10, 21.666666666666664 ],  [ 11, 23.166666666666664 ],  [ 21, 38.166666666666664 ],  [ 41, 68.16666666666667 ]];

	PPdata = [[ 2, 9.666666666666666 ],  [ 3, 11.166666666666666 ],  [ 4, 12.666666666666666 ],  [ 5, 14.166666666666666 ],  [ 6, 15.666666666666666 ],  [ 7, 17.166666666666664 ],  [ 8, 18.666666666666664 ],  [ 9, 20.166666666666664 ],  [ 10, 21.666666666666664 ],  [ 11, 23.166666666666664 ],  [ 21, 38.166666666666664 ],  [ 41, 68.16666666666667 ]];
	
	// make scoring entry in blockchain/ MNM smart contract  START
	
	//  scoring mechanism for now is LMS statistics/ evolving to Evolutionary Algormith, small, medium, large, low ganularit, high ganularity, high/low accurancy(err mgt),  time, near far away.  i.e. the AI at the heart of the PROTOCOL
	actualdata.forEach(function() {


	});		
	
	
	scoring = [0,0,0,0,0,0,0,0,0,0];  // perfect
	//scoring['pp'], scoring['complexity'],scoring['context']
	
	//  make HASH of scoring data and save to blockchain MNM smart contract
	// keep track of scoring on local database
	this.mnmscore = scoring
	
	
};	

module.exports = mScore;