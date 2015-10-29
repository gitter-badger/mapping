if ( typeof require != "undefined") {
	var buster = require("buster");
	var mappingUnits = require("../src/mappingunits.js");
}

buster.spec.expose(); // Make spec functions global

var spec = describe("Fundamental units allow in protocol", function () {
	before(function () {
		
		this.testMappingUnits = new mappingUnits();
	
	});

	it("check object defined", function () {
	   
		buster.assert.defined(new mappingUnits); 
		
	});
	
	it("object controller created", function () {
	 
		buster.assert.isObject(this.testMappingUnits);
	});
	
	
	
});