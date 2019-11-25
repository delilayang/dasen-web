$(function() {
    //index lb
    if ($("#lg_box").length) {
        var unslider = $("#lg_box").unslider({
            speed: 500,
            delay: 3500,
            keys: true,
            dots: true,
            fluid: false
        })
    }

    //header slideUp
    var header = $('.header');
    $(window, document).scroll(function() {
        nowH = $(window).scrollTop();
        if (nowH > 200) {
            header.slideUp(100);
        } else {
            header.slideDown(100);
        }

    })

    //text show
    var textBox = $('#textBox'),
        textBtn = $('#textBtn');

    textBtn.find('li').on('click', function() {
        textBtn.find('a').removeClass('active');
        $(this).find('a').addClass('active');
        var index = $(this).index();
        textBox.find('li').eq(index).fadeIn().siblings().hide();
    })

    //header nav
    var path = location.pathname,
        navList = $('#nav li');
    if (path.indexOf('reg') > -1) {
        navList.eq(2).addClass('active');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(3).addClass('active');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(4).addClass('active');
    } else if (path.indexOf('index') > -1 || path.split(/home/)[1] == undefined) {
        navList.eq(0).addClass('active');
    }


    //init
    init();

    //radio
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 1000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee direction="left" scrollamount="3" scrolldelay="100" width="840" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee direction="left" scrollamount="3" scrolldelay="100" width="840" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到购彩网</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);
})
