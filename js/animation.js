$(function(){
	$('#trigger01').on('inview', function(event, isInView){
		if (isInView) {
		$(".slide-right").animate({opacity: 1,'right': '5.3em'}, 1000);
		}
	});
    
    $('#trigger02').on('inview', function(event, isInView){
		if (isInView) {
		$(".slide-left").animate({opacity: 1,'left': '10%'}, 1000);
		}
	});
    
    $('#trigger03').on('inview', function(event, isInView){
		if (isInView) {
		$(".slide-left02").animate({opacity: 1,'left': '0%'}, 1000);
		}
	});
});
