(function(){
    
    $('td').on('click', changeBgColor);
    
    function random() {
        return Math.floor(Math.random()* 255 );
    }
    
    function generateRgb() {
        // rgb(255,23,56)
        
        return "rgb(" + random() + "," + random() + "," + random() + ")";
    }
    
    function changeBgColor(e){
        console.log(e);
        this.style.backgroundColor = generateRgb();
    }
    
}())