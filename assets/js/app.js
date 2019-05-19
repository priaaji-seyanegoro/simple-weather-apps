$(document).ready(function () {
  let long;
  let lat;

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat  = position.coords.latitude;

      var api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long + '';

      $.getJSON(api, function (res) {
        console.log(res);
        var celsius     = res.main.temp;
        var farenheit   = (celsius * 1.8) + 32;

        var location = res.name;

        $('.location-timezone').html(location);
        $('.temperature-degree').html(Math.floor(celsius));
        $('.temperature-description').html(res.weather[0].description);
        $('.weatherType').attr('id' , res.weather[0].main);
        $('.temperature').on('click' , function(){
          if ($('.temperature-degree').html() == (Math.floor(celsius))) {
            $('.temperature-degree').html(Math.floor(farenheit));
            $('.temperature-type').html('°F');
          }else {
            $('.temperature-degree').html(Math.floor(celsius));
            $('.temperature-type').html('°C');
          }
        });


        //SETTING UP THE ICON
        var icons = new Skycons({
            "color": "white"
        });

        icons.set("Clear-day", Skycons.CLEAR_DAY);
        icons.set("Clear-night", Skycons.CLEAR_NIGHT);
        icons.set("Partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
        icons.set("Partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
        icons.set("Clouds", Skycons.CLOUDY);
        icons.set("Rain", Skycons.RAIN);
        icons.set("Sleet", Skycons.SLEET);
        icons.set("Snow", Skycons.SNOW);
        icons.set("Wind", Skycons.WIND);
        icons.set("Fog", Skycons.FOG);
        icons.play();

      });
    });
  }

});
