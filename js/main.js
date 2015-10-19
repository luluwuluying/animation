




$(document).ready(function(){
    
    $(".b1").click(function(){  
        $(".flower1").fadeIn("slow");
        $(".flower2").fadeIn("slow");
        $(".flower3").fadeIn("slow");
        $(".flower4").fadeIn("slow");
        
    
        $(".flower1").fadeOut("slow");
        $(".flower2").fadeOut("slow");
        $(".flower3").fadeOut("slow");
        $(".flower4").fadeOut("slow");
        
        $(".flower1").rotate({
              angle:0, 
              animateTo:360, 
           });
        $(".flower2").rotate({
              angle:0, 
              animateTo:360, 
           });
        $(".flower3").rotate({
              angle:0, 
              animateTo:360, 
           });
        $(".flower4").rotate({
              angle:0, 
              animateTo:360, 
           });
   
       $(".butterfly").animate({
            height: 'toggle'
        });
        
    });
        
        
    });