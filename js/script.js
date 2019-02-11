/* The Loader */
$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 500); 
});

/* Full Screen Menu */
$('.navToggle').click(function(){
  $('.menu').toggleClass('menuOn')
  $('nav').toggleClass('navOn')
})