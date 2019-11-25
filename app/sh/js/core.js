$(function() {
    $('.Close').click(function(event) {
        $('.lefu').hide();
    });

    //header nav
    var path = location.pathname,
        navList = $('#nav a');

    if (path.indexOf('appdownload') > -1) {
        navList.eq(2).addClass('on');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(5).addClass('on');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('on');
    } else if (path.indexOf('index') > -1 || path == '/home') {
        navList.eq(0).addClass('on');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(3).addClass('on');
    } else if (path.indexOf('agent') > -1) {
        navList.eq(6).addClass('on');
    } else if (path.indexOf('rules') > -1) {
        navList.eq(4).addClass('on');
    }

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
                    $("#noticeDom").html('<marquee scrollamount="4" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到盛宏彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
})