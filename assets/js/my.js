$(document).ready(function(){
  $('.bxslider').bxSlider({
  	mode: 'fade',
  });
});

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

$('.label-default.tag').click(function(){
	$('.label-default.tag').toggleClass("filtered");
	filter= this.innerHTML;
	console.log(filter);
	postFilter(filter)
});

function postFilter(input) {
    var filter, li, a, i;

    filter=input.toUpperCase();
    li = document.getElementsByClassName("mini-post");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(a.innerHTML);
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}