
function Thermostat(){

	this.temp = 20;
	this.mintemp = 10;

};


Thermostat.prototype.up = function(){
	this.temp++;
};


Thermostat.prototype.down = function(){
	if(this.temp==this.mintemp) throw "It's wayyyy too cold for that. Go back to Canada"
	this.temp--;
};
