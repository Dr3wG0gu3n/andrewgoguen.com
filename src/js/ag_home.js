// Javascript Page for the Home page of my personal site.
// Author: Andrew Goguen
// Date: December 5, 2015
// Site: andrewgoguen.com
// Purpose: To add some cool functionality to elements on my home page.

$(document).ready(function() {
  // $('.project_1').html('')
  //   .css({
  //   'background-image':'url(/images/amplify_landing.png)',
  //   'height':'100%'
  // });
  // $('.mission-statement').html("<p>Software & Web Developer</p>");
  $('.project').hover(
    //on mouseover
    function() {
      $(this).animate({
        height: '+=40px' //adds 250px
        }, 'slow' //sets animation speed to slow
      );
    },
    //on mouseout
    function() {
      $(this).animate({
        height: '-=40px' //substracts 250px
        }, 'slow'
      );
    }
  );



// $(".project_1").html("Hello World");
  

});