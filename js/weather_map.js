$(function() {
    // var sanAntonioID = 4726206;
    var sanAntonioLat = 29.423017;
    var sanAntonioLng = -98.48527;
    var weatherAppId = localStorage.getItem("weatherapikey");
    var weatherOptions = {};
    // weatherOptions.id = sanAntonioID;
    weatherOptions.lat = sanAntonioLat;
    weatherOptions.lon = sanAntonioLng;
    weatherOptions.appid = weatherAppId;


    var weatherData = function(temp_max, temp_min, imgName,
                               weatherName, weatherDesc, humidity,
                               windSpeed, pressure) {
        var weatherCard = "<article class='card, col-xs-4, px-4'>";

        var highlowtemp = "";
        temp_max = parseFloat(temp_max) * 9/5 - 459.67;
        highlowtemp += Math.round(temp_max);
        highlowtemp += "° / ";
        temp_min = parseFloat(temp_min) * 9/5 - 459.67;
        highlowtemp += Math.round(temp_min);
        highlowtemp += "°";
        weatherCard += "<div class='temp, weather'>" + highlowtemp + "</div>";

        var weatherimg = ""
        weatherimg += "<div class='icon, weather'><img src='http://openweathermap.org/img/w/"
        weatherimg += imgName;
        weatherimg += ".png'/></div>"
        weatherCard += weatherimg;

        var currweather = ""
        currweather += "<div class='dailyweather, weather'>"
        currweather += weatherName;
        currweather += " : ";
        currweather += weatherDesc;
        currweather += "</div>"
        weatherCard += currweather;

        var hum = ""
        hum += "<div class='humidity, weather'>Humidity: "
        hum += humidity;
        hum += "</div>"
        weatherCard += hum;

        var wind = ""
        wind += "<div class='wind, weather'>Wind: "
        wind += windSpeed;
        wind += "</div>"
        weatherCard += wind;

        var press = ""
        press += "<div class='pressure, weather'>Pressure: "
        press += pressure;
        press += "</div>"
        weatherCard += press;

        return weatherCard;
    }

    $.get("https://api.openweathermap.org/data/2.5/weather", weatherOptions).done(function(data){
        console.log(data);

        var weatherDataCard = weatherData(
            data.main.temp_max,
            data.main.temp_min,
            data.weather[0].icon,
            data.weather[0].main,
            data.weather[0].description,
            data.main.humidity,
            data.wind.speed,
            data.main.pressure
        );
        // $("#localWeather").append(weatherDataCard);
    });

    $.get("https://api.openweathermap.org/data/2.5/forecast", weatherOptions).done(function(data) {
        console.log(data);
        var weatherDataCard1 = weatherData(
            data.list[0].main.temp_max,
            data.list[0].main.temp_min,
            data.list[0].weather[0].icon,
            data.list[0].weather[0].main,
            data.list[0].weather[0].description,
            data.list[0].main.humidity,
            data.list[0].wind.speed,
            data.list[0].main.pressure
        );
        $("#localWeather").append(weatherDataCard1);

        var weatherDataCard2 = weatherData(
            data.list[7].main.temp_max,
            data.list[7].main.temp_min,
            data.list[7].weather[0].icon,
            data.list[7].weather[0].main,
            data.list[7].weather[0].description,
            data.list[7].main.humidity,
            data.list[7].wind.speed,
            data.list[7].main.pressure
        );
        $("#localWeather").append(weatherDataCard2);

        var weatherDataCard3 = weatherData(
            data.list[15].main.temp_max,
            data.list[15].main.temp_min,
            data.list[15].weather[0].icon,
            data.list[15].weather[0].main,
            data.list[15].weather[0].description,
            data.list[15].main.humidity,
            data.list[15].wind.speed,
            data.list[15].main.pressure
        );
        $("#localWeather").append(weatherDataCard3);

    });
});