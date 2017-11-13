function QuoteService(){
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
	var apiUrl = url + encodeURIComponent(url2);
	//Do Not Edit above we have to go through the bcw-getter to access this api
	
	this.getQuote =  function(callWhenDone){
		$.get(apiUrl, function(res){
			res = JSON.parse(res)
			//Now What?
			localStorage.setItem('todo', JSON.stringify(res))
			callWhenDone(res)
		})
	}
}


<<<<<<< HEAD

=======
>>>>>>> 9d1fc75419333cefe5bb92bc7992fb5f75da4a22
