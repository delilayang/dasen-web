$(document).ready(function() {
    var a = 0,
    b = $("#homeBanner"),
    d = b.children(".banner"),
    c = d.length - 1,
    g = b.children().first().children().first(),
    b = b.children().first().children().last(),
    e = function(a) {
        d.hide().eq(a).fadeIn(500)
    },
    f = function() {
        a = a >= c ? 0 : a + 1;
        e(a)
    };
    d.hover(function() {
        clearInterval(bannerTimerTimerID)
    },
    function() {
        bannerTimerTimerID = setInterval(f, 5E3)
    });
    g.click(function() {
        a = 0 < a ? a - 1 : c;
        e(a)
    });
    b.click(function() {
        a = a >= c ? 0 : a + 1;
        e(a)
    }); - 1 < c && (bannerTimerTimerID = setInterval(f, 5E3));
    $("#games").children().hover(function() {
        $(this).children().fadeIn(500)
    },
    function() {
        $(this).children().stop().fadeOut(500)
    })
});

var f_com={};
f_com.anythingSliderOpt = {
	buildArrows : true,
	buildNavigation : true,
	buildStartStop : false,
	delay : false,
	startText : '',
	stopText : '',
	navigationFormatter : function(index, panel) {
		return '';
	}
}

$(function() {
	$('.ad-flash').hover(function() {
		$('.anythingSlider .arrow').stop().animate({
			'opacity' : 1
		}, 1000);
	}, function() {
		$('.anythingSlider .arrow').stop().animate({
			'opacity' : 0
		}, 1000);
	});

	$('.anythingSlider .back').wrap("<div class='arrow-wrap back'></div>");
	$('.anythingSlider .forward').wrap("<div class='arrow-wrap forward'></div>");
});
(function(f_com) {
	var slider_box = $('.js-ele-anythingSlider', '#js-ele-slider'), option = {
		mode : 'h',
		buildArrows : false,
		autoPlay : true,
		buildStartStop : false,
		delay : false,
		navigationFormatter : function(index, panel) {
			return index + '';
		}
	};
	$.extend(option, f_com.anythingSliderOpt);

	$('img', slider_box).each(function() {
		var img = $(this).prop('src');
		if (img.indexOf('.png') != -1 && navigator.userAgent.indexOf("MSIE") != -1) {
			$(this).attr('style', 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + img + '",sizingMethod="scale")');
		}
	});
	
	slider_box.find('li').show();
	slider_box.anythingSlider(option);
})(f_com);