$(document).ready(function() {

	console.log($('html').attr('lang'));
	if($('html').attr('lang') == 'es') {
		window.location.pathname = $(location).attr('hostname') + '/es';
	} else {
		window.location.pathname = $(location).attr('hostname') + '/en';		
	}

	$('.project-item').each(function() {
		$(this).find('button.arrow').click(function() {
			$(this).toggleClass('active');
			$(this).parent('.project-header').siblings('.project-info').toggleClass('active');
		});
	});

});

