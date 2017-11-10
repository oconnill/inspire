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



// var template = ''
// for (var i = 0; i < photoArr.length; i++) {
// 	var photo = photoArr[i];
// 	template += `
// 	<div class="col-sm-6 col-md-4">
// 	<div class="thumbnail">
// 		<img src="${photo.img_src}">
// 		<div class="caption">
// 			<h3>${photo.camera.full_name}</h3>
// 			<p>${photo.earth_date}</p>
// 			<p>${photo.rover.name}</p>
// 		</div>
// 	</div>
// </div>
// `
// }
// galleryElem.innerHTML = template
// }
