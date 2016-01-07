function Thermostat() {
  this.degrees = 20;
  this.powerSaving = true;
}

Thermostat.prototype.currentTemp = function() {
  return this.degrees;
};

Thermostat.prototype.upButton = function() {
  if (this.powerSaving === true && this.degrees >= 25) {
    throw new Error('Temperature cannot exceed 25');
  }
  if (this.powerSaving === false && this.degrees >= 32) {
    throw new Error('Temperature cannot exceed 32');
  }
  else {
    return this.degrees += 1;
  }
};

Thermostat.prototype.downButton = function() {
  if (this.degrees < 10) {
    throw new Error('Temperature cannot fall below 10');
  }
  else {
    return this.degrees -= 1;
  }
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving = !this.powerSaving;
};

Thermostat.prototype.resetButton = function () {
  this.degrees = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.degrees < 18) {
    return 'Green';
  }
  if (this.degrees >= 18 && this.degrees < 25) {
    return 'Yellow';
  }
  else {
    return 'Red';
  }
};