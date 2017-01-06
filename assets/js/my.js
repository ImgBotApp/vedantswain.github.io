$(document).ready(function(){
  $('.bxslider').bxSlider({
  	mode: 'fade',
  });
  postFilter();
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
	var t_class="filtered";
	$(this).toggleClass(t_class);
	filter= this.innerHTML.toUpperCase();
	if ($(this).hasClass(t_class)) {
	    filter_tags.push(filter);		
	}
	else {
		var index= filter_tags.indexOf(filter);
		if (index > -1) {
    		filter_tags.splice(index, 1);
		}
	}

	postFilter();
});

var filter_tags = [];

function postFilter() {
    var li, a, i, isTag;

    var count=0;

    li = document.getElementsByClassName("mini-post");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("section")[0];
        // console.log(a.innerHTML);
        isTag = filterTags(a.innerHTML.toUpperCase());
        $(li[i]).fadeOut(100);
        // console.log(isTag);
        if (isTag) {
            // li[i].style.display = "";
            $(li[i]).fadeIn(300);
            count++;
        } else {
            // li[i].style.display = "none";
            $(li[i]).fadeOut(300);
        }
    }

    var pcount_html= "<b>"+count+"</b>/"+li.length+" Projects on display";
    $("#project-count").html(pcount_html);
}

function filterTags(input) {
	var i, filter;

	if (filter_tags.length < 1) {
		return true;
	}

	var tag_count=0;
	for (i = 0; i < filter_tags.length; i++) {
		 filter = filter_tags[i];
		 if (input.indexOf(filter) > -1){
		 	tag_count++;
		 }
	}

	if (tag_count == filter_tags.length) {
		return true;
	};

	return false;
}