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
	$(this).toggleClass("filtered");
	filter= this.innerHTML;
	console.log(filter);
	postFilter(filter)
});

var filter_tags = [];

function postFilter(input) {
    var li, a, i, isTag;

    filter_tags.push(input.toUpperCase());
    li = document.getElementsByClassName("mini-post");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        // console.log(a.innerHTML);
        isTag = filterTags(a.innerHTML.toUpperCase());
        if (isTag) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function filterTags(input) {
	var i, filter;

	for (i = 0; i < filter_tags.length; i++) {
		 filter = filter_tags[i];
		 if (input.indexOf(filter) > -1){
		 	return true;
		 }
	}

	return false;
}