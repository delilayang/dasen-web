$(function() {
    //header nav
    var path = location.pathname,
        navList = $('#nav li');

    if (path.indexOf('agent') > -1) {
        navList.eq(2).addClass('active');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(5).addClass('active');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('active');
    } else if (path.indexOf('index') > -1 || path == '/') {
        navList.eq(0).addClass('active');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(3).addClass('active');
    } else if (path.indexOf('about') > -1) {
        navList.eq(6).addClass('active');
    } else if (path.indexOf('app') > -1) {
        navList.eq(4).addClass('active');
    }

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

    //index gamelist
    var gameboxLi = $('#gamebox li');

    gameboxLi.hover(function() {
        var $img = $(this).find('img').eq(1);
        $img.stop().animate({ width: 214, height: 214, margin: '-7px 0 0 -7px' }, 200)
    }, function() {
        var $img = $(this).find('img').eq(1);
        $img.stop().animate({ width: '100%', height: '100%', margin: 0 }, 200)
    })

    //line animate
    var endData = {
        sec: 18,
        secLeft: -60,
        min: 218,
        minLeft: -20,
        type: 1
    }

    var secDom = $('#sec'),
        secLine = $('#secLine'),
        minDom = $('#min'),
        minLine = $('#minLine');

    $(window, document).scroll(function() {
        var nowH = $(window).scrollTop();
        if (!endData.type) {
            return;
        }
        if (nowH > 400) {
            secLine.animate({ left: endData.secLeft }, 1200);
            count1(secDom, endData.sec, 1);
            endData.type1 = 0;
        }
        if (nowH > 430) {
            minLine.animate({ left: endData.minLeft }, 1400);
            var nowNum = minDom.text();
            count2(minDom, endData.min, 2);
            endData.type = 0;
        }

    })

    function count1(dom, num, plusNum) {
        var nowNum = parseInt(dom.text());

        function run() {
            if (nowNum < num) {
                nowNum += plusNum;
                dom.text(nowNum);
                setTimeout(run, 67);
            } else {
                return;
            }
        }
        run();
    }

    function count2(dom, num, plusNum) {
        var nowNum = dom.text() * 100;

        function run() {
            if (nowNum < num) {
                nowNum += plusNum;
                dom.text(nowNum / 100);
                setTimeout(run, 10);
            } else {
                return;
            }
        }
        run();
    }


    //float
    $("#float").Float();

    function testQQ() {
        var qqnum = $('#float .cfgMainCustomerQQ').text();
        if (qqnum.length) {
            var html = '';
            for (var i = 0; i < qqnum.length; i++) {
                html += '<i class="icon-num icon-num-' + qqnum[i] + '"></i>'
            }
            $('#float .cfgMainCustomerQQ').html(html).show();
        } else {
            setTimeout(testQQ, 1000);
        }
    }

    testQQ();

    $('#float_close a').click(function() {
        $("#float").hide();
    })


    //rules
    var rulesBoxes = $('#rules li'),
        detailBoxes = $('#rules .detail');

    rulesBoxes.on('click', function() {
        var $btn = $(this),
            detailBox = $btn.find('.detail');

        if (!$btn.hasClass('on')) {
            detailBoxes.slideUp();
            $btn.addClass('on').siblings().removeClass('on');
            detailBox.slideDown();
        } else {
            $btn.removeClass('on');
            detailBox.slideUp();
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
                    $("#noticeDom").html('<marquee scrollamount="4" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到必发彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
});
