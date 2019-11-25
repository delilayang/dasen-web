$(function() {

    //header active
    var path = location.pathname,
        navList = $('#nav li');

    if (path.indexOf('agent') > -1) {
        navList.eq(5).addClass('active');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('active');
    } else if (path.indexOf('bank') > -1) {
        navList.eq(2).addClass('active');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(7).addClass('active');
    } else if (path.indexOf('index') > -1 || path.indexOf('html') == -1) {
        navList.eq(0).addClass('active');
    } else if (path.indexOf('question') > -1) {
        navList.eq(3).addClass('active');
    } else if (path.indexOf('rules') > -1) {
        navList.eq(4).addClass('active');
    } else if (path.indexOf('about') > -1) {
        navList.eq(6).addClass('active');
    }

    //menu active
    var menu = $('#menu li');

    if (path.indexOf('agent') > -1) {
        menu.eq(4).addClass('active');
    } else if (path.indexOf('reg') > -1) {
        menu.eq(0).addClass('active');
    } else if (path.indexOf('bank') > -1) {
        menu.eq(1).addClass('active');
    } else if (path.indexOf('activity') > -1) {
        menu.eq(6).addClass('active');
    } else if (path.indexOf('question') > -1) {
        menu.eq(2).addClass('active');
    } else if (path.indexOf('rules') > -1) {
        menu.eq(3).addClass('active');
    } else if (path.indexOf('about') > -1) {
        menu.eq(5).addClass('active');
    }else if (path.indexOf('contact') > -1) {
        menu.eq(7).addClass('active');
    }

    //index lb
    if ($("#lb_Index").length) {
        var unslider = $("#lb_Index").unslider({
            speed: 500,
            delay: 3000,
            keys: true,
            dots: true,
            fluid: false
        })
    }

    //rules box
    var rulesbox = $('#rules .rulebox'),
        rulesbtn = $('#rules img');

    rulesbtn.on('click', function() {
        var $btn = $(this),
            $box = $btn.parents('li').next('.rulebox');

        if (!$btn.hasClass('on')) {
            $btn.addClass('on');
            $box.slideDown();
        } else {
            $btn.removeClass('on');
            $box.slideUp();
        }
    })


    //index line animate
    var endData = {
        sec: 600,
        secLeft: -60,
        min: 250,
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
            secLine.animate({ marginLeft: endData.secLeft }, 1500);
            count(secDom, endData.sec, 2);
        }
        if (nowH > 530) {
            minLine.animate({ marginLeft: endData.minLeft }, 1500);
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
                setTimeout(run, 5);
            } else {
                return;
            }
        }
        run();
    }

    //float
    $("#float").Float();
    $('#float_close a').click(function() {
        $("#float").hide();
    })

    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee width="888" scrollamount="4" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee width="888" scrollamount="4" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到乐透彩</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
})
