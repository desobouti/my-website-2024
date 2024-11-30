$(document).ready(function() {

	if($('html').attr('lang') == 'en') {
		window.location.pathname = 'https//' + $(location).attr('hostname') + '/en';		
	}

	$('.project-item').each(function() {
		$(this).find('button.arrow').click(function() {
			$(this).toggleClass('active');
			$(this).parent('.project-header').siblings('.project-info').toggleClass('active');
		});
	});

});

