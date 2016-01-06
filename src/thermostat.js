
function Thermostat(){

	this.temp = 20;
	this.mintemp = 10;
	this.isPowerSaving = true;

};


Thermostat.prototype.up = function(){
	this.temp++;
};


Thermostat.prototype.down = function(){
	if(this.temp===this.mintemp) throw "It's wayyyy too cold for that. Go back to Canada"
	this.temp--;
};


Thermostat.prototype.maxTemp = function(){
	return 25;
};

Thermostat.prototype.togglePowerSave = function(){
	this.isPowerSaving ? this.isPowerSaving=false : this.isPowerSaving=true;

};