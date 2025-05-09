angular.module('weatherApp')
.controller('WeatherController', function($http) {
    var vm = this;
    var apiKey = "afe23f7765b55a3c9ed7d1881a610b7d";
    

    vm.city = "";
    vm.cardActive = false;
    vm.loading = false;
    vm.error = false;
    vm.errorMessage = "";
    

    vm.cityName = "";
    vm.temperature = "";
    vm.feelsLike = "";
    vm.minTemperature = "";
    vm.maxTemperature = "";
    vm.humidity = "";
    vm.windVelocity = "";
    vm.windOrientation = "";
    vm.iconUrl = "";
    

    vm.getWeather = function() {
        if (!vm.city && !localStorage.getItem('lastCity')) {
            vm.city = "São Paulo";
        } else if (!vm.city) {
            vm.city = localStorage.getItem('lastCity');
        }
        
        vm.loading = true;
        vm.error = false;
        vm.cardActive = false;
        
        $http.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: vm.city,
                appid: apiKey,
                units: 'metric',
                lang: 'pt_br'
            }
        })
        .then(function(response) {
            var data = response.data;
            
   
            vm.cityName = data.name;
            vm.temperature = Math.round(data.main.temp);
            vm.feelsLike = Math.round(data.main.feels_like);
            vm.minTemperature = Math.round(data.main.temp_min);
            vm.maxTemperature = Math.round(data.main.temp_max);
            vm.humidity = data.main.humidity;
            vm.windVelocity = data.wind.speed.toFixed(1);
            vm.windOrientation = data.wind.deg;
            vm.iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            
  
            vm.cardActive = true;
            localStorage.setItem('lastCity', vm.cityName);
        })
        .catch(function(error) {
            vm.error = true;
            vm.errorMessage = "Cidade não encontrada. Tente novamente.";
            console.error("Erro na API:", error);
        })
        .finally(function() {
            vm.loading = false;
            vm.city = ""; 
        });
    };
    

    vm.getWeather();
});