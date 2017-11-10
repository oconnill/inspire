function QuoteService(){
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
	var apiUrl = url + encodeURIComponent(url2);
	//Do Not Edit above we have to go through the bcw-getter to access this api
	
	this.getQuote =  function(callWhenDone){
		$.get(apiUrl, function(res){
			res = JSON.parse(res)
			//Now What?
			localStorage.setItem('quote', JSON.stringify(res))
			callWhenDone(res)
		})
	}
}


// function ImageService() {
// 	var url = '//bcw-getter.herokuapp.com/?url=';
// 	var url2 = 'http://www.splashbase.co/api/v1/images/random'
// 	var apiUrl = url + encodeURIComponent(url2);

// 	this.getImage = function (callWhenDone) {
// 		// ^^^^^^^ How do you call this function?
// 		return $.get(apiUrl, function (res) {
// 			res = JSON.parse(res)
// 			localStorage.setItem('image', JSON.stringify(res))
// 			callWhenDone(res)
// 		})
// 	}
// }