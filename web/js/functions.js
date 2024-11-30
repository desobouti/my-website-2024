$(document).ready(function() {

	console.log($('html').attr('lang'));
	if($('html').attr('lang') == 'es') {
		window.location.pathname = '/es';
	} else {
		window.location.pathname = '/en';		
	}

	$('.project-item').each(function() {
		$(this).find('button.arrow').click(function() {
			$(this).toggleClass('active');
			$(this).parent('.project-header').siblings('.project-info').toggleClass('active');
		});
	});

});

