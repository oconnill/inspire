function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
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