$(function(){
	// nav
	var path = location.pathname,
        navList = $('#nav li');

    if (path.indexOf('reg') > -1) {
        navList.eq(2).addClass('cur');
    }else if (path.indexOf('index') > -1 || path == '/' || path == '/xc/') {
        navList.eq(1).addClass('cur');
    }

    $(window).scroll(function(e) {
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 120) {
            $(".kf").addClass("kf-fixed")
        } else {
            $(".kf").removeClass("kf-fixed")
        }
    });

    //弹框
    $(".navli a").on("click", function() {
        layer.open({
            type: 1,
            title: $(this).html(),
            area: ["630px", "80%"],
            shade: .5,
            shadeClose: true,
            content: $('#' + $(this).attr("class") + ''),
        });
    })
    $(".nomsg a").on("click", function() {
        layer.open({
            type: 1,
            title: $(this).html(),
            area: ["270px", "190px"],
            shadeClose: true,
            content: $("#discount")
        });
    })

    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee scrollamount="4" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee scrollamount="4" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到星彩</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
})