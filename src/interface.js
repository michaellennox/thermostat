var thermostat = new Thermostat();

$(document).ready(function() {
  var $powerSave = $('#power-save');
  updateData();

  $('#power-save').on('click', function() {
    thermostat.togglePowerSave();
    togglePowerSaveUI();
    updateData();
  });

  $('#up').on('click', function() {
    thermostat.up();
    updateData();
  });

  $('#down').on('click', function() {
    thermostat.down();
    updateData();
  });

  $('#reset').on('click', function() {
    thermostat.resetTemp();
    updateData();
  });
});

function updateData() {
  $('#temperature').text(thermostat.temp);
  $('#display').css('background-color', thermostat.displayColour());
}

function togglePowerSaveUI() {
  if (thermostat.isPowerSaving) {
    $('#power-save').css('background-color', 'green');
  } else {
    $('#power-save').css('background-color', 'red');
  }
}
