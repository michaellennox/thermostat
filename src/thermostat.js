function Thermostat() {
  this.degrees = 20
  this.powerSaving = true
};

Thermostat.prototype.currentTemp = function() {
  return this.degrees;
};

Thermostat.prototype.upButton = function() {
  if (this.powerSaving === true && this.degrees > 25) {
    throw new Error('Temperature cannot exceed 25');
  }
  if (this.powerSaving === false && this.degrees > 32) {
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

Thermostat.prototype.powerSavingStatus = function() {
  return this.powerSaving;
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving = false;
};