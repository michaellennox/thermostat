describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starting temperature for thermostat', function() {
    it('defaults to 20 degrees', function() {
      expect(thermostat.currentTemp()).toEqual(20)
    });
  });

  describe('increase temperature', function() {
    it('increases temp by 1', function() {
      thermostat.upButton();
      expect(thermostat.currentTemp()).toEqual(21);
    });
  });

  describe('decrease temperature', function() {
    it('decreases temp by 1', function() {
      thermostat.downButton();
      expect(thermostat.currentTemp()).toEqual(19);
    });
  });

  describe('minimum temperature', function() {
    it('has a minimum of 10 degrees', function() {
      do {
        thermostat.downButton();
      }
      while (thermostat.degrees >= 10);
      expect(function(){ thermostat.downButton(); }).toThrowError('Temperature cannot fall below 10');
    });
  });
});
