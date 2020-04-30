


$(".klik").click(function(){
	$(".box").animate({
		width: "+=20px",
		height: "+=40px"
	}, 1000, function() {
		// Animation complete.
	});
});
