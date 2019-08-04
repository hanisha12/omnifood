$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px'
    });
$('.js--scroll-to-plans').click(function(){
    $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},2000);
});

$('.js--scroll-to-features').click(function(){
    $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass("animated fadeIn");
    },{
        offset: '60%'
    });
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass("animated fadeInUp");
    },{
        offset: '50%'
    });
        $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass("animated fadeIn");
    },{
        offset: '50%'
    });
        $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass("animated pulse");
    },{
        offset: '60%'
    });
});
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		console.log('success!', xhr);
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}

	// Code that should run regardless of the request status
	console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('POST', '/index.html');
xhr.send();
