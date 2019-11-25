$(function() {
    //index lb
    if ($("#lb_Index").length) {
        var unslider = $("#lb_Index").unslider({
            speed: 500,
            delay: 3500,
            keys: true,
            dots: true,
            fluid: false
        })
    }

    //active init
    var path = location.pathname,
        navList = $('#nav li');
    if (path.indexOf('agent') > -1) {
        navList.eq(5).addClass('active');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('active');
    } else if (path.indexOf('rules') > -1) {
        navList.eq(4).addClass('active');
    } else if (path.indexOf('appdownload') > -1) {
        navList.eq(2).addClass('active');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(6).addClass('active');
    } else if (path.indexOf('index') > -1 || path == '/') {
        navList.eq(0).addClass('active');
    } else if (path.indexOf('question') > -1) {
        navList.eq(3).addClass('active');
    }

    //nav background
    var nowact = $('#nav .active'),
        nav = $('#nav');
    navList.hover(function() {
        $(this).addClass('active').siblings().removeClass('active');
    }, function() {
        $(this).removeClass('active');
    })

    nav.on('mouseleave', function() {
        nowact.addClass('active');
    })

    //loginbox cover setting
    var lgbox = $('#lg_box'),
        lgipt = lgbox.find('.cover').next('input');

    lgipt.on('focus', function() {
        $(this).siblings('.cover').hide();
    })

    lgipt.on('blur', function() {
        if (!$(this).prop('value')) {
            $(this).siblings('.cover').show();
        }
    })

    //gamelist animate
    var gameList = $('#gamelist'),
        gameAList = gameList.find('a');
    gameAList.on('mouseenter', function() {
        $(this).stop().animate({
            top: -5
        }, 150)
    })
    gameAList.on('mouseleave', function() {
        $(this).stop().animate({
            top: 0
        }, 150)
    })

    //float
    $("#float").Float();
    $('#float_close a').click(function() {
        $("#float").hide();
    })

    //line animate
    var endData = {
        sec: 88,
        secLeft: -60,
        min: 138,
        minLeft: -30,
        type: 1
    }

    var secDom = $('#sec'),
        secLine = $('#secLine'),
        minDom = $('#min'),
        minLine = $('#minLine');

    $(window, document).scroll(function() {
        nowH = $(window).scrollTop();
        if (!endData.type) {
            return;
        }
        if (nowH > 500) {
            secLine.animate({ left: endData.secLeft }, 1200);
            count(secDom, endData.sec, 1);
        }
        if (nowH > 530) {
            minLine.animate({ left: endData.minLeft }, 1200);
            var nowNum = minDom.text();
            count(minDom, endData.min, 1, 1);
            endData.type = 0;
        }
    })

    function count(dom, num, plusNum, type) {
        var nowNum = dom.text() * 100,
            type = type ? 100 : 10;

        function run() {
            if (nowNum < num) {
                nowNum = nowNum + plusNum;
                dom.text(nowNum / type);
                setTimeout(run, 10);
            } else {
                return;
            }
        }
        run();
    }

    //rules
    var rulesBoxes = $('#rules a'),
        detailBoxes = $('#rules .drop');

    rulesBoxes.on('click', function() {
        var $btn = $(this),
            detailBox = $btn.next('.drop');

        if (!$btn.hasClass('on')) {
            detailBoxes.slideUp('fast');
            $btn.addClass('on').siblings().removeClass('on');
            detailBox.slideDown('fast');
        } else {
            $btn.removeClass('on');
            detailBox.slideUp('fast');
        }

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
                    $("#noticeDom").html('<marquee scrollamount="4" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到大通</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化



})
