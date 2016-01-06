
describe("Thermostat", function() {

	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});


	it("Initializes with a temp of 20 degrees", function(){
		expect(thermostat.temp).toEqual(20);
	});

	describe("#up", function(){

		it("increases the temperature by one", function(){
			thermostat.up();
			expect(thermostat.temp).toEqual(21);
		});
	});

	describe("#down", function(){

		it("Decreases the temp by one", function(){
			thermostat.down();
			expect(thermostat.temp).toEqual(19);
		});

		it("Wont decrease past min temp", function(){
			thermostat.temp = thermostat.mintemp;
			expect(function(){thermostat.down()}).toThrow("It's wayyyy too cold for that. Go back to Canada");
		});

	});



});