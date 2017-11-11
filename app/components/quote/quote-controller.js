function QuoteController() {

	var qs = new QuoteService()

	qs.getQuote(function (quo) {
		drawQuote(quo)

	})

	function drawQuote(quo) {
		var template = ''
		template += `
		<div class="pa4">
		<blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
		  <p class="f5 f4-m f3-l lh-copy measure mt0">
		${quo.quote}
		  </p>
		  <cite class="f6 ttu tracked fs-normal">-${quo.author}</cite>
		</blockquote>
	  </div>
`
		document.getElementById('quote').innerHTML = template
	}
}

