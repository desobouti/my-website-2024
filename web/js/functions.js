$(document).ready(function() {

	$('.project-item').each(function() {
		$(this).find('button.arrow').click(function() {
			$(this).toggleClass('active');
			$(this).parent('.project-header').siblings('.project-info').toggleClass('active');
		});
	});

});

