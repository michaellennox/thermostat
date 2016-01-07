var thermostat = new Thermostat();

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
});
