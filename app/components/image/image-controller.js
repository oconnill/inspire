function ImageController(){
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var ic = this;
	var imageService = new ImageService();
    
    imageService.getImage(function(image){
        //if statement to filter differnt img sizes
        drawImage(image.url);
    })


    function drawImage(photo){
        debugger

document.body.style.backgroundImage = `url(${photo})`       

    }
    

        
}








