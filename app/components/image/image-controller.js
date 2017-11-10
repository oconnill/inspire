function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var ic = this;
	var imageService = new ImageService();

	imageService.getImage(function(image){
		console.log(image);
	})

}


// function WeatherController(){
// 	var wc = this;
// 	var weatherService = new WeatherService();
	
// 	weatherService.getWeather(function(weather){
// 		console.log(weather);
// 		//What can you do with this weather object?
// 	})

// }