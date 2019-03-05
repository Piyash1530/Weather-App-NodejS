
let request = require('request');
const argv = require('yargs').argv;

let apiKey = 'ff800074c5e221ec806532b18500f96e';
let city = argv.c || 'Canada';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      let message = `It's ${weather.main.temp} degrees in ${weather.name} looks like ${weather.clouds.all} cloudy!`;
      function dok(){
        console.log(message);
      }
      dok();
    }
  });

