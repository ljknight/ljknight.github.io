$('.carousel').on('slide.bs.carousel', function(evt) {
   var step = $(evt.relatedTarget).index();
   $('.caption:not(#caption-'+step+')').fadeOut('fast', function() {
   		$('#caption-'+step).fadeIn();
   });
});
