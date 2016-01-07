var thermostat = new Thermostat();
var climateAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
var climateAPPID = "&APPID=c55052d49a5b3f3706243775f1783525";

function updateData() {
  $("#degrees").text(thermostat.degrees);
  $("#temp-display").css("background-color", thermostat.energyUsage());
}

function powerSavingUI() {
  if(thermostat.powerSaving) {
    $("#power-saving-switch").css("background-color", "");
  }
  else {
    $("#power-saving-switch").css("background-color", "grey");
  }
}

$(document).ready(function() {
  updateData();
  $("#up").click(function() {
    thermostat.upButton();
    updateData();
  });

  $("#down").click(function() {
    thermostat.downButton();
    updateData();
  });

  $("#reset").click(function() {
    thermostat.resetButton();
    updateData();
  });

  $("#power-saving-switch").click(function() {
    thermostat.powerSavingSwitch();
    updateData();
    powerSavingUI();
  });

  $("#climate").click(function() {
    var city = $("#select-city").val();
    $.getJSON(climateAPI + city + climateAPPID, function(data) {
      $("#temp-local").text("Temp: " + Math.floor(data.main.temp -273));
    });
  });
});
