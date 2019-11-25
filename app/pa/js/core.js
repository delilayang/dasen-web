$(function() {
    //index lb
    if ($("#lb_box").length) {
        var unslider = $("#lb_box").unslider({
            speed: 500,
            delay: 3500,
            keys: true,
            dots: true,
            fluid: false
        })
    }

    //header nav
    var path = location.pathname,
        navList = $('#nav li');
    if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('active');
    } else if (path.indexOf('appdown') > -1) {
        navList.eq(2).addClass('active');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(3).addClass('active');
    } else if (path.indexOf('rules') > -1) {
        navList.eq(4).addClass('active');
    } else if (path.indexOf('agent') > -1) {
        navList.eq(5).addClass('active');
    } else if (path.indexOf('about') > -1) {
        navList.eq(6).addClass('active');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(7).addClass('active');
    } else if (path.indexOf('index') > -1 || path.split(/home/)[1] == undefined) {
        navList.eq(0).addClass('active');
    }

    //rules
    $('#slide .pic').on('click',function(){
        $(this).next('.detail').slideToggle();
    })

    //float
    $("#float").Float();
    $("#float_close").on('click',function(){
        $("#float").hide();
    })


    //init
    init();

    //radio
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 1000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee direction="left" scrollamount="5" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee direction="left" scrollamount="5" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到平安彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);
})
