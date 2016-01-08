var thermostat = new Thermostat();

$(document).ready(function() {
  var $powerSave = $('#power-save');
  var $up = $('#up');
  var $down = $('#down');
  var $reset = $('#reset');
  var $temperature = $('#temperature');
  var $display = $('#display');

  updateData();

  $powerSave.on('click', function() {
    thermostat.togglePowerSave();
    togglePowerSaveUI();
    updateData();
  });

  $up.on('click', function() {
    thermostat.up();
    updateData();
  });

  $down.on('click', function() {
    thermostat.down();
    updateData();
  });

  $reset.on('click', function() {
    thermostat.resetTemp();
    updateData();
  });

  function updateData() {
    $temperature.text(thermostat.temp);
    $display.css('background-color', thermostat.displayColour());
  }

  function togglePowerSaveUI() {
    if (thermostat.isPowerSaving) {
      $powerSave.css('background-color', 'green');
    } else {
      $powerSave.css('background-color', 'red');
    }
  }
});
