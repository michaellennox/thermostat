var thermostat = new Thermostat();
var $powerSave = $('#power-save');

function updateData() {
  $('#temperature').text(thermostat.temp);
  $('#display').css('background-color', thermostat.displayColour());
}

function togglePowerSaveUI() {
  if (thermostat.isPowerSaving) {
    $powerSave.css('background-color', 'green');
  } else {
    $powerSave.css('background-color', 'red');
  }
}

$(document).on('click', updateData());

$(document).ready(function() {
  updateInfo();

  $powerSave.on('click', function() {
    thermostat.togglePowerSave();
    togglePowerSaveUI();
  });

  $('#up').on('click', function() {
    thermostat.up();
  });

  $('#down').on('click', function() {
    thermostat.down();
  });

  $('#reset').on('click', function() {
    thermostat.resetTemp();
  });
});
