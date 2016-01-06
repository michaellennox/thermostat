function Thermostat() {
  this.degrees = 20
  // const MIN_TEMP = 10;
};

Thermostat.prototype.currentTemp = function() {
  return this.degrees;
};

Thermostat.prototype.upButton = function() {
  return this.degrees += 1;
};

Thermostat.prototype.downButton = function() {
  if (this.degrees < 10) {
    throw new Error('Temperature cannot fall below 10');
  }
  else {
    return this.degrees -= 1;
  }
};
