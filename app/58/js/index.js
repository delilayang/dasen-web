$(document).ready(function(){
	window.setTimeout(function(){
		$(".loading").fadeOut(500)
	},400)

	$(".lunleft").lunleftFn({time: 15});
	
	
	$(".tanbtn1").click(function(){
		$(".tanhucbx").hide();
		$(".tanhcu-1").show();
	})
	$(".tanbtn2").click(function(){
		$(".tanhucbx").hide();
		$(".tanhcu-2").show();
	})
	$(".tanbtn3").click(function(){
		$(".tanhucbx").hide();
		$(".tanhcu-3").show();
	});
	$(".tanhucbx").click(function(){
		$(".tanhucbx").hide();
		
	});
	
	function stopBuFn(e){
		var e = e || event;
		if ( e && e.stopPropagation ) {
			e.stopPropagation();
	
		} else { 
			e.cancelBubble = true;
		}		
	};
	
	$(".chuitin").click(function(e){
		stopBuFn(e);
	});

	$("a[href*='#benye']").click(function(){
		var x = $(this).attr("href");
		if(x == "#benye1"){
			$(this).parents(".tanhucbx").find(".tannqinr").eq(0).show().siblings(".tannqinr").hide();
		}
		if(x == "#benye2"){
			$(this).parents(".tanhucbx").find(".tannqinr").eq(1).show().siblings(".tannqinr").hide();
		}
		if(x == "#benye3"){
			$(this).parents(".tanhucbx").find(".tannqinr").eq(2).show().siblings(".tannqinr").hide();
		}
		if(x == "#benye4"){
			$(this).parents(".tanhucbx").find(".tannqinr").eq(3).show().siblings(".tannqinr").hide();
		}
		if(x == "#benye5"){
			$(this).parents(".tanhucbx").find(".tannqinr").eq(4).show().siblings(".tannqinr").hide();
		}
		if(x == "#benye6"){
			$(this).parents(".tanhucbx").find(".tannqinr").eq(5).show().siblings(".tannqinr").hide();
		}
	});
	
	$("a[href='#guangyu']").click(function(){
		$(".tanhcu-1").find(".tannqinr").eq(0).show().siblings(".tannqinr").hide();
	});
	$("a[href='#lianxi']").click(function(){
		$(".tanhcu-1").find(".tannqinr").eq(1).show().siblings(".tannqinr").hide();
	});

	//init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 1000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {
                    var html = '<marquee scrollamount="4" scrolldelay="30" style="line-height:28px;" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee scrollamount="5" style="line-height:28px;" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到58彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
})