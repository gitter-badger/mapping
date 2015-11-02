if ( typeof require != "undefined") {
	var buster = require("buster");
	var score = require("../src/score.js");
}

buster.spec.expose(); // Make spec functions global

var spec = describe("manages scoring of an MNP", function () {
	before(function () {
		
		this.testScore = new score();
	
	});

	it("check object defined", function () {
	   
		buster.assert.defined(new score); 
		
	});
	
	it("object controller created", function () {
	 
		buster.assert.isObject(this.testScore);
	});
	
	it("perform a PP scoring proceedure", function () {
		
		buster.assert.isFunction(this.testScore.ppscoring);
	});
		
	
});