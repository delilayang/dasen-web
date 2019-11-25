$(function() {
    // index lb
    if ($("#lb_box").length) {
        var unslider = $("#lb_box").unslider({
            speed: 500,
            delay: 3500,
            keys: true,
            fluid: false,
            dots: true
        })
    }
    // header time
    function getTime() {
        var nowDate = new Date(),
            nY = nowDate.getFullYear(),
            nM = nowDate.getMonth() + 1,
            nD = nowDate.getDate(),
            nH = nowDate.getHours(),
            nMi = nowDate.getMinutes(),
            nS = nowDate.getSeconds();
        nM = nM < 10 ? '0' + nM : nM;
        nD = nD < 10 ? '0' + nD : nD;
        nH = nH < 10 ? '0' + nH : nH;
        nMi = nMi < 10 ? '0' + nMi : nMi;
        nS = nS < 10 ? '0' + nS : nS;

        var fullTime = nY + '-' + nM + '-' + nD + ' ' + nH + ':' + nMi + ':' + nS;
        $('#nowdate').text(fullTime);
    }

    setInterval(getTime, 1000);

    //header nav
    var path = location.pathname,
        navList = $('#nav li');

    if (path.indexOf('agent') > -1) {
        navList.eq(6).addClass('on');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(3).addClass('on');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('on');
    } else if (path.indexOf('index') > -1 || path == '/') {
        navList.eq(0).addClass('on');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(4).addClass('on');
    }else if (path.indexOf('app') > -1) {
        navList.eq(5).addClass('on');
    }else if (path.indexOf('bank') > -1) {
        navList.eq(2).addClass('on');
    }

    //index gamelist
    var gameboxLi = $('#imgshow li');

    gameboxLi.hover(function() {
        var $img = $(this).find('img').eq(0);
        $img.stop().animate({ width: 'auto', height: 235, marginLeft: -7 }, 200)
    }, function() {
        var $img = $(this).find('img').eq(0);
        $img.stop().animate({ width: 'auto', height: '100%', marginLeft: -5 }, 200)
    })

    //float
    $("#float").Float();
    $('#float .close').click(function() {
        $("#float").hide();
    })


    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 1000);
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
                    $("#noticeDom").html('<marquee scrollamount="5" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到永旺彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化

});