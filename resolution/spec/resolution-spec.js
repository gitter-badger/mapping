if ( typeof require != "undefined") {
	var buster = require("buster");
	var resolution = require("../src/resolution.js");
}

buster.spec.expose(); // Make spec functions global

var spec = describe("manages Resolution for the client", function () {
	before(function () {
		
		this.testResolution = new resolution();
	
	});

	it("check object defined", function () {
	   
		buster.assert.defined(new resolution); 
		
	});
	
	it("object controller created", function () {
	 
		buster.assert.isObject(this.testResolution);
	});
	
	it("list of computationally active MNM", function () {
		
		buster.assert.isFunction(this.testResolution.computationallyActive);
	});

	it("update resolution scoring", function () {
		
		buster.assert.isFunction(this.testResolution.updateResolution);
	});

	it("order the resolutions", function () {
		
		buster.assert.isFunction(this.testResolution.orderResolution);
	});
	
	it("score resolution, i.e. compare MNM", function () {
		
		buster.assert.isFunction(this.testResolution.aggregatescoreResolution);
	});
		
	
});