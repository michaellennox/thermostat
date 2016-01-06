
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

		it("When power saving is on, it wont increase past 25", function(){
			thermostat.temp = 25;
			expect(function(){thermostat.up()}).toThrow("It's too hot already!");
		});

		it("When power saving is off, it wont increase past 32", function(){
			thermostat.togglePowerSave();
			thermostat.temp = 32;
			expect(function(){thermostat.up()}).toThrow("It's too hot already!")
		});
	});

	describe("#down", function(){

		it("Decreases the temp by one", function(){
			thermostat.down();
			expect(thermostat.temp).toEqual(19);
		});

		it("Wont decrease past min temp", function(){
			thermostat.temp = thermostat.minTemp;
			expect(function(){thermostat.down()}).toThrow("It's wayyyy too cold for that. Go back to Canada");
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

		it('sets temp to 25 if over 25 when toggling on', function(){
			thermostat.togglePowerSave();
			thermostat.temp = 30;
			thermostat.togglePowerSave();
			expect(thermostat.temp).toEqual(25);
		});
	});

	describe("#resetTemp", function(){
		it("Resets the temp to 20", function(){
			thermostat.up();
			thermostat.resetTemp();
			expect(thermostat.temp).toEqual(20);
		});
	});


});






















