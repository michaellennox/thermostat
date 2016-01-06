
describe("Thermostat", function() {

	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});


	it("Initializes with a temp of 20 degrees", function(){
		expect(thermostat.temp).toEqual(20);
	});

	it("Initializes with power saving true", function(){
		expect(thermostat.isPowerSaving).toBe(true);
	});

	describe("#up", function(){

		it("Increases the temperature by one", function(){
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

	describe("#maxTemp", function(){
		it("Returns 25 when isPowerSaving is true", function(){
			expect(thermostat.maxTemp()).toEqual(25)
		});

		it("Returns 32 when isPowerSaving is false", function(){
			thermostat.togglePowerSave();
			expect(thermostat.maxTemp()).toEqual(32)
		});

	});

	describe("#togglePowerSave", function(){
		it("turns power saving false when true", function(){
			thermostat.togglePowerSave();
			expect(thermostat.isPowerSaving).toBe(false);
		});

		it("turns power saving true when false", function(){
			thermostat.togglePowerSave();
			thermostat.togglePowerSave();
			expect(thermostat.isPowerSaving).toBe(true);
		});
	});


});