/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {


     /*----------------------------------------------------*/
     /* Scroll animations
      ------------------------------------------------------ */

     // navigation animation
     $('#about').waypoint({
         handler: function(direction) {
             if (direction == 'down') {
                 $('header').addClass('scrolled');
             } else {
                 $('header').removeClass('scrolled');
             }
         },
         offset: '75%'
     });



     // animation on article appearance
     $('#skills li h4').waypoint({
         handler: function(direction) {
             var element = this.element;
             element = $(element).closest('li');
             if (direction == 'down') {
                 element.addClass('scrolled');
             } else {
                 element.removeClass('scrolled');
             }
         },
         offset: '75%'
     });


     // animation on article appearance
     $('.work-articles article h3').waypoint({
         handler: function(direction) {
             var element = this.element;
             element = $(element).closest('article');
             if (direction == 'down') {
                 element.addClass('scrolled');
             } else {
                 element.removeClass('scrolled');
             }
         },
         offset: '75%'
     });




/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});



/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });


});
