$(document).ready(function(){
  if($(window).width() <= 767) {
  document.location = "mobile-index.html";
  } else {
    document.location = "index.html";
  }

  $('.carousel').on('slide.bs.carousel', function(evt) {
     var step = $(evt.relatedTarget).index();
     $('.caption:not(#caption-'+step+')').fadeOut('fast', function() {
     		$('#caption-'+step).fadeIn();
     });
  });
});
