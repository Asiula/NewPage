
$(document).ready(function(){
    $('.carousel').carousel();
});
$(document).ready(function(){
    // Change this to the correct selector.
    $('midnight').midnight();
});
$('.carousel.carousel-slider').carousel({fullWidth: true});
function nextslide(){
    $('.carousel').carousel('next');
}
