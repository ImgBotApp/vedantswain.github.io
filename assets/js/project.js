$('.head-link').click(function(e) {
    e.preventDefault();
     
    var goto = $(this).attr('href');
 
    $('html, body').animate({
        scrollTop: $(goto).offset().top - 70
    }, 500);
});

// Get the modal
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

$('.project-thumb').click(function(e){
    modal.style.display = "block";
    modalImg.src = $(this).attr('src');
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}