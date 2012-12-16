$(function() {
	$('input.enabled').live("focusout", function(){
  	$(this).addClass('disabled')
				      .removeClass('enabled')
				      .attr('disabled','disabled');
    });
});