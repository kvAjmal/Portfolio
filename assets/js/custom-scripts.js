(function($) {
  "use strict";
  
    $.fn.andSelf = function() {
      return this.addBack.apply(this, arguments);
    }
  
      /* Loader Code Start */
      $(window).on("load", function() { 
          $(".section-loader").fadeOut("slow");
          
          var $container = $('.portfolioContainer');
          $container.isotope({
              filter: '*',
              animationOptions: {
                  queue: true
              }
          });
       
          $('.portfolio-nav li').click(function(){
              $('.portfolio-nav .current').removeClass('current');
              $(this).addClass('current');
       
              var selector = $(this).attr('data-filter');
              $container.isotope({
                  filter: selector,
                  animationOptions: {
                      queue: true
                  }
               });
               return false;
          });
        });
      /* Loader Code End */
  
   
    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */
    
    var trigger = $('.navbar-toggler'),
      overlay     = $('.overlay'),
      navc     = $('.navbar-collapse'),
      active      = false;
  

      $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
          $('.navbar-toggler').toggleClass('active')
        //   $('#js-navbar-menu').toggleClass('active');
        //   $('.navbar-collapse').toggleClass('show');
          overlay.toggleClass('active');
          navc.toggleClass('active');
      });  
      
        
    /*
    |=================
    | Onepage Nav
    |================
    */
        
      $('#mh-header').onePageNav({
          currentClass: 'active', 
          changeHash: false,
          scrollSpeed: 750,
          scrollThreshold: 0.5,
      });
    
    /*
    |=================
    | fancybox
    |================
    */
 
      $("[data-fancybox]").fancybox({});
      
      
    /*
    |===============
    | WOW ANIMATION
    |==================
    */
    	var wow = new WOW({
          mobile: false  // trigger animations on mobile devices (default is true)
      });
      wow.init();
      
      
    /*
    |=================
    | AOS
    |================
    */      
      
      //AOS.init();
  
    /*
    | ==========================
    | NAV FIXED ON SCROLL
    | ==========================
    */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });
    

    /*
    |=================
    | Progress bar
    |================
    */   
    $(".determinate").each(function(){
      var width = $(this).text();
      $(this).css("width", width)
        .empty()
        .append('<i class="fa fa-circle"></i>');                
    });
    
    /*
    |=================
    | Portfolio mixin
    |================
    */   
    $('#portfolio-item').mixItUp();
    
   
   
   
    
    // Smooth Scroll
        // $(function() {
        //   $('a[href*=#]:not([href=#])').click(function() {
        //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        //       var target = $(this.hash);
        //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        //       if (target.length) {
        //         $('html,body').animate({
        //           scrollTop: target.offset().top
        //         }, 600);
        //         return false;
        //       }
        //     }
        //   });
        // });
        
        
        
    /*
    |=================
    | CONTACT FORM
    |=================
    */
        
    $("#contactForm").validator().on("submit", function (event) {
      if (event.isDefaultPrevented()) {
          // handle the invalid form...
          formError();
          submitMSG(false, "Did you fill in the form properly?");
      } else {
          // everything looks good!
          event.preventDefault();
          submitForm();
      }
    });




function submitForm(){
    // Initiate Variables With Form Content


    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbw7Sif9KT3SUZtPKqK6zzh1KrFbr-IavXZEOD53Mw/exec",
        data:$("#contactForm").serialize(),
        method:"post",

        success:function (response){
            formSuccess();
            setTimeout(function(){// wait for 5 secs(2)
              location.reload(); // then reload the page.(3)
           }, 5000);
            $("#contactForm")[0].reset();
           
        },
        error:function (err){
           formError();

        }
           
    })

}



function formSuccess(){
    // $("#contactForm")[0].reset();
    submitMSG(true, "Message has been submitted successfully.")
}


function formError(){   
  $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
  });
}

function submitMSG(valid, msg){
  if(valid){
    var msgClasses = "h3 text-center fadeInUp animated text-success";
  } else {
    var msgClasses = "h3 text-center shake animated text-danger";
  }
  $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}


    

    
}(jQuery));
