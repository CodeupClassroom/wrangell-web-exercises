$(function() {
    var weatherData = function(temp_max, temp_min, imgName,
                               weatherName, weatherDesc, humidity,
                               windSpeed, pressure) {
        var weatherCard = "<article class='card'><div class='card-body, col-sm-4, mx-2, weatherCard, text-center'>";

        var highlowtemp = "";
        highlowtemp += Math.round(parseFloat(temp_max) * 9/5 - 459.67);;
        highlowtemp += "° / ";
        highlowtemp += Math.round(parseFloat(temp_min) * 9/5 - 459.67);
        highlowtemp += "°";
        weatherCard += "<div class='temp, weather'>" + highlowtemp + "</div>";

        var weatherimg = "<div class='icon, weather'><img src='http://openweathermap.org/img/w/"
        weatherimg += imgName + ".png'/></div>";
        weatherCard += weatherimg;

        var currweather = "<div class='dailyweather, weather'>"
        currweather += weatherName + " : " + weatherDesc + "</div>";
        weatherCard += currweather;

        weatherCard += "<div class='humidity, weather'>Humidity: " + humidity + "</div>";

        weatherCard += "<div class='wind, weather'>Wind: " + windSpeed + "</div>";

        weatherCard += "<div class='pressure, weather'>Pressure: " + pressure + "</div>";

        weatherCard += "</div></article>";
        return weatherCard;
    }

    // $.get("https://api.openweathermap.org/data/2.5/weather", weatherOptions).done(function(data){
    //     // console.log(data);
    //
    //     var weatherDataCard = weatherData(
    //         data.main.temp_max,
    //         data.main.temp_min,
    //         data.weather[0].icon,
    //         data.weather[0].main,
    //         data.weather[0].description,
    //         data.main.humidity,
    //         data.wind.speed,
    //         data.main.pressure
    //     );
    //     // $("#localWeather").append(weatherDataCard);
    // });

    var fillData = function (lat, lng) {
        var weatherAppId = localStorage.getItem("weatherapikey");
        var weatherOptions = {};
        // weatherOptions.id = sanAntonioID;
        weatherOptions.lat = lat;
        weatherOptions.lon = lng;
        weatherOptions.appid = weatherAppId;

        $.get("https://api.openweathermap.org/data/2.5/forecast", weatherOptions).done(function (data) {
            console.log(data);

            $("#cityName").append(data.city.name);

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

            var mapOptions = {
                zoom: 4,
                center: {
                    lat: lat ,
                    lng: lng
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP
                // ROADMAP, HYBRID, TERRAIN, SATELLITE
            };

            var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        });
    };

    var latitudeSA = 29.423017;
    var longitudeSA = -98.48527;
    fillData(latitudeSA, longitudeSA);

    $("#button").click(function() {
        var lat = $("#latitude");
        var long = $("#longitude");
        fillData(lat, long);
    });


});