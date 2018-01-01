$('document').ready(function(){
    
    $('.yellow-block').on('click', function(){
        $('html, body').animate({ scrollTop: $("#sobre").offset().top}, 'slow');
    });
    
    $('.contato').on('click', function(){
        $('html, body').animate({ scrollTop: $("#contato").offset().top}, 'slow');
    });
    
    $('.parceiros').on('click', function(){
        $('html, body').animate({ scrollTop: $("#parceiros").offset().top}, 'slow');
    });
    
    $('.eventos').on('click', function(){
        $('html, body').animate({ scrollTop: $("#agenda").offset().top}, 'slow');
    });
    
});