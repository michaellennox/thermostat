$(document).ready(function() {
  var thermostat = new Thermostat();
  var $powerSave = $('#power-save');

  var updateInfo = function() {
    $('#temperature').text(thermostat.temp);
    $('#display').css('background-color', thermostat.displayColour());
  };

  var togglePowerSaveUI = function() {
    if ($powerSave.text() === 'PowerSave - On') {
      $powerSave.text('PowerSave - Off');
    } else {
      $powerSave.text('PowerSave - On');
    }
  };

  $powerSave.on('click', function() {
    thermostat.togglePowerSave();
    togglePowerSaveUI();
    updateInfo();
  });

  updateInfo();

  $('#up').on('click', function() {
    thermostat.up();
    updateInfo();
  });

  $('#down').on('click', function() {
    thermostat.down();
    updateInfo();
  });

  $('#reset').on('click', function() {
    thermostat.resetTemp();
    updateInfo();
  });
});
