describe('Thermostat', function() {

  var thermostat = new Thermostat;

  describe('starting temperature for thermostat', function() {
    it('defaults to 20 degrees', function() {
      expect(thermostat.degrees()).toEqual(20)
    });
  });

  // describe('', function() {
  //   it('', function() {
  //
  //   });
  // });
  //
  // describe('', function() {
  //   it('', function() {
  //
  //   });
  // });
  //
  // describe('', function() {
  //   it('', function() {
  //
  //   });
  // });
});
