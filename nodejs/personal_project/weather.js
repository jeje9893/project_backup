const OpenWeatherMapHelper = require("openweathermap-node");

const helper = new OpenWeatherMapHelper(
    {
        APPID: '90680f63f36ae8394a049a2640ed1fa1',
        //units: "imperial"
    }
);



helper.getCurrentWeatherByCityName("Busan", (err, currentWeather) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(currentWeather)
        //console.log('날씨',(currentWeather['weather']['main']),'현재온도',(currentWeather['main']['temp']-274).toFixed(2),'도',' 체감온도',(currentWeather['main']['feels_like']-274).toFixed(2),'도');
    }
});