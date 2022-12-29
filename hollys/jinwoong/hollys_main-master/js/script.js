let subWrapTimeout;
$(function(){
    $el = $("nav .sub_wrap");
	 $("nav .hover_box.menu").mouseover(function() {
        clearTimeout(subWrapTimeout);
		$el.stop().slideDown(500);
	}).mouseout(function(){
        slideWrapClose($el);
	});

    $("nav .hover_box:not(.menu)").mouseenter(function() {
        slideWrapClose($el);
    });

    $("nav .menu_wrap").mouseenter(function() {
        $(".menu_wrap").removeClass("on").addClass("on");
    })
    $("nav").mouseleave(function() {
        $(".menu_wrap").removeClass("on");
    });

    $(".sub_wrap").mouseenter(function() {
        clearTimeout(subWrapTimeout);
    }).mouseleave(function() {
        slideWrapClose($el);
    });

	let swiper = new Swiper(".main_visual", {
        loop: true,
        autoplay : {  
        delay : 4000,  
        disableOnInteraction : false, 
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})

function slideWrapClose($el) {
    subWrapTimeout = setTimeout(function() {
        $el.stop().slideUp(500);
        //$el.find(".text").hide();
    },200);
}
