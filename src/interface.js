var thermostat = new Thermostat();
var climateAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
var climateAPPID = "&APPID=c55052d49a5b3f3706243775f1783525";

$(document).ready(function() {
  var $powerSave = $('#power-save');
  updateData();

  $powerSave.on('click', function() {
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

  $('#get-weather-data').on('click', function() {
    getWeatherData();
  });

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

  function getWeatherData() {
    $.getJSON(climateAPI + 'London' + climateAPPID, function(data) {
      $('#weather-location').text('Weather in London, UK');
      $('#weather-temp').text('Temperature: ' + Math.round(data.main.temp - 273.15) + 'C');
      $('#weather-weather').text('Weather: ' + data.weather[0].main);
    });
  }
});
