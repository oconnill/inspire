function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		drawWeather(weather);

	})

	function drawWeather(weather) {
		var template = ''		
		template += `
		<h3>${weather.name}</h3>
		<h5>${Math.floor(weather.main.temp * 9/5 - 459.67)}°F</h5>
        `
		document.getElementById('weather').innerHTML = template
	}



}



