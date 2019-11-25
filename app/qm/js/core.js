$(function() {
    //form check
    $('#form_reg').validationEngine();
    $('#form_lg').validationEngine();

    //header nav
    var path = location.pathname,
        menuBtns = $('#menu a');

    if (path.indexOf('about') > -1) {
        menuBtns.eq(0).addClass('active');
    } else if (path.indexOf('contact') > -1) {
        menuBtns.eq(1).addClass('active');
    } else if (path.indexOf('agent') > -1) {
        menuBtns.eq(2).addClass('active');
    } else if (path.indexOf('activity') > -1 || path == '/') {
        menuBtns.eq(3).addClass('active');
    } else if (path.indexOf('bank') > -1) {
        menuBtns.eq(4).addClass('active');
    } else if (path.indexOf('reg') > -1) {
        menuBtns.eq(5).addClass('active');
    } else if (path.indexOf('rules') > -1) {
        menuBtns.eq(6).addClass('active');
    }

    //dropbox
    var dropBtn = $('.dropbtn');
    dropBtn.on('click', function() {
        $(this).next('li').slideToggle('fast');
    })

    //index lb
    if ($("#lb_box").length) {
        var unslider = $("#lb_box").unslider({
            speed: 500,
            delay: 3500,
            keys: true,
            dots: true,
            arrows: true,
            fluid: false
        })
    }

    //header timer
    setInterval(function() {
        var nowTime = new Date(),
            hour = nowTime.getHours(),
            mini = nowTime.getMinutes(),
            sec = nowTime.getSeconds(),
            timeType;

        hour = hour < 10 ? '0' + hour : hour;
        mini = mini < 10 ? '0' + mini : mini;
        sec = sec < 10 ? '0' + sec : sec;

        if (hour > 18) {
            timeType = '晚上';
        } else if (hour > 12) {
            timeType = '下午';
        } else {
            timeType = '上午';
        }

        $('#time').text(timeType + ' ' + hour + ':' + mini + ':' + sec);
    }, 1000)


    //float
    $('#float .close').click(function() {
        $("#float").slideUp();
    })


    //agent tab
    var tabBtns = $('#tab a'),
        tabMains = $('#tabMain>div');

    tabBtns.on('click', function() {
        var $btn = $(this),
            index = $btn.index();

        if (!$btn.hasClass('active') && index != 4) {
            $btn.addClass('active').siblings().removeClass('active');
            tabMains.eq(index).fadeIn().siblings().hide();
        }
    })


    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 1000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee scrollamount="3" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee scrollamount="3" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到全民彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
});
