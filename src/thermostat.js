function Thermostat() {
  this.degrees = 20
};

Thermostat.prototype.currentTemp = function() {
  return this.degrees;
};

Thermostat.prototype.upButton = function() {
  return this.degrees += 1;
};

Thermostat.prototype.downButton = function() {
  return this.degrees -= 1;
};