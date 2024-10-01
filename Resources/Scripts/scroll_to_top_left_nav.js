/* Scroll To Top Link Using jQuery */

(function($) {
	$(document).ready(function(){
		setTimeout(function(){
			//When distance from top = 250px fade button in/out
			var isScrollEventFromDocument = false;
			
			
			$(".body-container").scroll(function(){
				isScrollEventFromDocument = false;
				if ($(this).scrollTop() > 250) {
					$('#scrollup').fadeIn(300);
				} else {
					$('#scrollup').fadeOut(300);
				}
			});
			
			$(document).scroll(function(){
				isScrollEventFromDocument = true;
				if ($(this).scrollTop() > 250) {
					$('#scrollup').fadeIn(300);
				} else {
					$('#scrollup').fadeOut(300);
				}
			});

			//On click scroll to top of page t = 1000ms
			$('#scrollup').click(function(){
				var target = isScrollEventFromDocument ? document.scrollingElement : ".body-container";
				$(target).animate({ scrollTop: 0 }, 1000);
				return false;
			});
		}, 1000);
	});
})(jQuery);