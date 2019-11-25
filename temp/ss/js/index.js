$(document).ready(function(){
	$('.ele-slideshow-wrap img').each(function () {
        var img = $(this).prop('src');
        if (img.indexOf('.png') != -1 && navigator.userAgent.indexOf("MSIE") != -1) {
            $(this).attr('style', 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + img + '",sizingMethod="scale")');
        }
    });

    $('#js-ele-slideshow'+1).slideshow({
         uni            : 1,
         animationType  : 'slideh',
         animationTime  : 1.5,
			 animationOption: {
   			 row : 10,
   			 col : 6
		},
			 isNav          : !!1,
         isControl      : !!1,
         navPosition    : 'center',
         isNumber       : !!0,
         isArrow        : !!1,
         isText         : !!0,
		 textX          : 50,
		 textY          : 10,
		 textTime       : 2,
		 random         : !!1,
			 //自動撥放
		 isAutoPlay     : !!1,
         hovePause      : !!1,
         isLink         : !!1,
	     isRunLine      : !!0,
	     runLinePos     : 'bottom',
	     fullScreen     : 0,
	     fullScreenIEType     : 'slideh'
	});
    
    $('.js-ele-firstgame-fade > span').hover(
    		function(){
    		$(this).css("background-position-x", "-185px")
    		.parent()
    		.css("background-position-x", "0");
    		}, function(){
    		$(this).css("background-position-x", "0")
    		.parent()
    		.css("background-position-x", "-185px");
    		}
	);
});