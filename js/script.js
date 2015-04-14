$(function(){
	// Recherche focus enter
	
	$("#champ-search").focusin(function() {
		$("#enter").fadeIn();
	});
	
	$("#champ-search").focusout(function() {
		$("#enter").fadeOut();
	});
	
	//Vidage automatique du champ de recherche
	
	$(".autoEmpty").each(function(index, element) {
        var defaultText = $(this).val();
		$(this).focus(function(){
			if ($(this).val() == defaultText){
				$(this).val("");	
			}
    });
	
	$(this).blur(function(){
			if ($(this).val() == ""){
					$(this).val(defaultText);
				}
		});
	});
	
	
	//Nivo slider
	$("#slider").nivoSlider({
		controlNav: false
	});
		
});