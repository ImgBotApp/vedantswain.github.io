$('.head-link').click(function(e) {
    e.preventDefault();
     
    var goto = $(this).attr('href');
 
    $('html, body').animate({
        scrollTop: $(goto).offset().top - 70
    }, 500);
});