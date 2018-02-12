$(window).scroll(function() /*_______scrollup_______*/
		{
			if($(this).scrollTop()>300) $('.scrollup').fadeIn();
			else $('.scrollup').fadeOut();	
		});  

$('a[href^="#"]').click(function () {
 $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);
 return false;
});

