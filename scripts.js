$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if(scroll >= $("#team").offset().top - 100) {
        $("header").removeClass();
        $("header").addClass("team");
    }else if(scroll >= $("#rules").offset().top - 100) {
        $("header").removeClass();
        $("header").addClass("rules");
    }else if(scroll >= $("#gameplay").offset().top - 100) {
        $("header").removeClass();
        $("header").addClass("gameplay");
    }else if (scroll >= $("#about").offset().top - 100) {
    	$("header").removeClass();
        $("header").addClass("about");
    }else{
    	$("header").removeClass();
    }
});

$(document).ready(function() {
    $('#menu-toggle').on('click', function(){
    	$('#top-bar').toggleClass('opened');
    })
});

function moveImagesRight(){
	if($('.gameplay-images > div').attr('data-c') == $('.gameplay-images > div img').length - 1){
		$('.gameplay-images > div').attr('data-c', '0');
		$('.gameplay-images > div').css({"-webkit-transform":"translateX(0)"});
	}else{
		$('.gameplay-images > div').attr('data-c', parseInt($('.gameplay-images > div').attr('data-c')) + 1);
		var pos = parseInt($('.gameplay-images > div').attr('data-c'))*($('.gameplay-images img').eq(0).width()+16);
		$('.gameplay-images > div').css({"-webkit-transform":"translateX(-"+pos+"px)"});
	}
}

function moveImagesLeft(){
	if($('.gameplay-images > div').attr('data-c') == 0){
		$('.gameplay-images > div').attr('data-c', $('.gameplay-images > div img').length - 1);
		$('.gameplay-images > div').css({"-webkit-transform":"translateX(-"+($('.gameplay-images > div img').length - 1)*($('.gameplay-images img').eq(0).width()+16)+"px)"});
	}else{
		$('.gameplay-images > div').attr('data-c', parseInt($('.gameplay-images > div').attr('data-c')) - 1);
		var pos = parseInt($('.gameplay-images > div').attr('data-c'))*($('.gameplay-images img').eq(0).width()+16);
		$('.gameplay-images > div').css({"-webkit-transform":"translateX(-"+pos+"px)"});
	}
}

function movePostsRight(){
    if($('.blog-posts > div').attr('data-c') == $('.blog-post').length - 1){
        $('.blog-posts > div').attr('data-c', '0');
        $('.blog-posts > div').css({"-webkit-transform":"translateX(0)"});
    }else{
        $('.blog-posts > div').attr('data-c', parseInt($('.blog-posts > div').attr('data-c')) + 1);
        var pos = parseInt($('.blog-posts > div').attr('data-c'))*($('.blog-post').eq(0).width()+16);
        $('.blog-posts > div').css({"-webkit-transform":"translateX(-"+pos+"px)"});
    }
}

function movePostsLeft(){
    if($('.blog-posts > div').attr('data-c') == 0){
        $('.blog-posts > div').attr('data-c', $('.blog-post').length - 1);
        $('.blog-posts > div').css({"-webkit-transform":"translateX(-"+($('.blog-post').length - 1)*($('.blog-post').eq(0).width()+16)+"px)"});
    }else{
        $('.blog-posts > div').attr('data-c', parseInt($('.blog-posts > div').attr('data-c')) - 1);
        var pos = parseInt($('.blog-posts > div').attr('data-c'))*($('.blog-post').eq(0).width()+16);
        $('.blog-posts > div').css({"-webkit-transform":"translateX(-"+pos+"px)"});
    }
}