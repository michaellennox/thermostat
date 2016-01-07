var thermostat = new Thermostat();

function updateData() {
  $("#degrees").text(thermostat.degrees);
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
  });
});
