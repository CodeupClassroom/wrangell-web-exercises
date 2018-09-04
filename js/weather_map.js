$(function() {
    var sanAntonioID = 4726206;
    var weatherAppId = localStorage.getItem("weatherapikey");
    var weatherOptions = {};
    weatherOptions.id = sanAntonioID;
    weatherOptions.appid = weatherAppId;

    console.log("Hello");
    $.get("https://api.openweathermap.org/data/2.5/weather", weatherOptions).done(function(data){
        console.log(data);
        // high and low temps
        // weather image
        // current weather
        // humidity
        // wind
        // pressure

        var highlowtemp = "";
        var temp_max = parseFloat(data.main.temp_max) * 9/5 - 459.67;
        highlowtemp += Math.floor(temp_max);
        highlowtemp += "°/";
        var temp_min = parseFloat(data.main.temp_min) * 9/5 - 459.67;
        highlowtemp += Math.floor(temp_min);
        highlowtemp += "°";
        console.log(highlowtemp);
        $("#localWeather").append("<h4>" + highlowtemp + "</h4>");

        var weatherimg = ""
        weatherimg += "<img src='http://openweathermap.org/img/w/"
        weatherimg += data.weather[0].icon;
        weatherimg += ".png'/>"
        console.log(weatherimg);

        $("#localWeather").append(weatherimg);


        var currweather = ""
        currweather += "<h4>"
        currweather += data.weather[0].main;
        currweather += " : ";
        currweather += data.weather[0].description;
        currweather += "</h4>"
        console.log(currweather);
        $("#localWeather").append(currweather);

        var humidity = ""
        humidity += "<h4>Humidity: "
        humidity += data.main.humidity;
        humidity += "</h4>"
        console.log(humidity);
        $("#localWeather").append(humidity);

        var wind = ""
        wind += "<h4>Wind: "
        wind += data.wind.speed;
        wind += "</h4>"
        console.log(wind);
        $("#localWeather").append(wind);

        var pressure = ""
        pressure += "<h4>Pressure: "
        pressure += data.main.pressure;
        pressure += "</h4>"
        console.log(pressure);
        $("#localWeather").append(pressure);
    });


})