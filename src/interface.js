var thermostat = new Thermostat();
var climateAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
var climateAPPID = "&APPID=c55052d49a5b3f3706243775f1783525";

$(document).ready(function() {
  var $powerSave = $('#power-save-status');
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

  $('#get-weather-data').on('submit', function(e) {
    e.preventDefault();
    var city = $('#city').val();
    getWeatherData(city);
  });

  function updateData() {
    $('#temperature').text(thermostat.temp);
    $('#temperature').css('color', thermostat.displayColour());
  }

  function togglePowerSaveUI() {
    if (thermostat.isPowerSaving) {
      $powerSave.css('background-color', 'green');
    } else {
      $powerSave.css('background-color', 'red');
    }
  }

  function getWeatherData(city) {
    $.getJSON(climateAPI + city + climateAPPID, function(data) {
      $('#weather-location').text('Weather in ' + data.name + ', ' + data.sys.country);
      $('#weather-temp').text(Math.round(data.main.temp - 273.15) + 'C  ').append('<img src="http://openweathermap.org/img/w/' + data.weather[0].icon +'.png">');
    });
  }
});
