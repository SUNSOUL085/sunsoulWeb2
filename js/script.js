// DISCLAIMER: This function does require jQuery. I've used it here because the project I'm building this for already uses jQuery, so I thought why not. It can be modified quite simply to be done in raw JavaScript.  Just thought I'd let you know.




// This is the funtion you need to copy
// Copy from line 9 to 34



$(document).ready(function(){
    $('#img-ls').lightSlider({
        item: 1,
        autoWidth:false, 
        auto: true,
        loop: true,
        pause: 5000,
        speed: 1000,
        mode : 'fade',
        vThumbWidth: 100,
        slideMargin: 0,
        controls: false,
        onSliderLoad: function() {
            $('#img-ls').removeClass('cS-hidden');
        } 
    });
    
    $('#jumbo-img').hide();

    $('.btn1').click(function(){
        $('#img-jumbo').hide();
        $('#jumbo-img').show();
        
    })
    $('.btn2').click(function(){
        $('#img-jumbo').show();
        $('#jumbo-img').hide();
        
    });
    autoType('.type-js',200);
    
   
    
   
});
$(document).ready(function(){
    
    $('.promo').lightSlider({
        item: 1,
        autoWidth:true,
        loop:true,
        auto:false,
        mode: "slide",
        adaptiveHeight:true,
        vThumbWidth:660,
        slideMargin: 50,
        enableTouch:true,
        enableDrag:true,
        auto:true,
        swipeThreshold: 40,
        onSliderLoad: function() {
            $('.promo').removeClass('cS-hidden');
        } 
    }); 
    $('.blue').on("click",function () {
        $('#promo1').attr('src', 'img/vader3.png');
    });
    $('.yellow').on("click",function () {
        $('#promo1').attr('src', 'img/vader22.png');
        
    }); 
});
$(document).ready(function(){
   $('#ls').lightSlider({
        item: 1,
        autoWidth:true,
        loop:true,
        auto:true,
        speed:4000,
        enableTouch:true,
        enableDrag:true,
        pauseOnHover:true,
        pause : 3000,
        adaptiveHeight:true,
        vThumbWidth:1460,
        slideMargin: 40,
        onSliderLoad: function() {
            $('#ls').removeClass('cS-hidden');
        } 
    });   
    
   
    
    
});

