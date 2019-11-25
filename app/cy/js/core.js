$(function() {

    //悬浮
    var duilian = $("div.duilian");
    var duilian_close = $("a.duilian_close");

    var screen_w = screen.width;
    if (screen_w > 1024) { duilian.show(); }
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        duilian.stop().animate({ top: scrollTop + 50 });
    });
    duilian_close.click(function() {
        $(this).parent().hide();
        return false;
    });

    //时间

    function getTime() {
        var nowDate = new Date(new Date().getTime()),
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
        $('#fulltime').text(fullTime);
    }

    setInterval(getTime, 1000);
    //

    function e(e, t, i) {
        function n() {
            s < t && (s += i, e.text(s), setTimeout(n, 67))
        }
        var s = parseInt(e.text());
        n()
    }

    function t(e, t, i) {
        function n() {
            s < t && (s += i, e.text(s / 100), setTimeout(n, 10))
        }
        var s = 100 * e.text();
        n()
    }

    function i() {
        var e = $("#float .cfgMainCustomerQQ").text();
        if (e.length) {
            for (var t = "", n = 0; n < e.length; n++) t += '<i class="icon-num icon-num-' + e[n] + '"></i>';
            $("#float .cfgMainCustomerQQ").html(t).show()
        } else setTimeout(i, 1e3)
    }

    var s = location.pathname,
        a = $("#nav li");
    if (s.indexOf("agent") > -1 ? a.eq(2).addClass("active") : s.indexOf("faq") > -1 ? a.eq(5).addClass("active") : s.indexOf("reg") > -1 ? a.eq(1).addClass("active") : s.indexOf("index") > -1 || "/" == s ? a.eq(0).addClass("active") : s.indexOf("activity") > -1 ? a.eq(3).addClass("active") : s.indexOf("about") > -1 ? a.eq(6).addClass("active") : s.indexOf("app") > -1 && a.eq(4).addClass("active"), $("#lb_box").length) {
        $("#lb_box").unslider({
            speed: 500,
            delay: 3500,
            keys: !0,
            dots: !0,
            fluid: !1
        })
    }
    $("#gamebox li").hover(function() {
        $(this).find("img").eq(1).stop().animate({
            width: 214,
            height: 214,
            margin: "-7px 0 0 -7px"
        }, 200)
    }, function() {
        $(this).find("img").eq(1).stop().animate({
            width: "100%",
            height: "100%",
            margin: 0
        }, 200)
    });
    var o = {
            sec: 18,
            secLeft: -60,
            min: 218,
            minLeft: -20,
            type: 1
        },
        l = $("#sec"),
        c = $("#secLine"),
        d = $("#min"),
        f = $("#minLine");
    $(window, document).scroll(function() {
        var i = $(window).scrollTop();
        if (o.type && (i > 400 && (c.animate({
                left: o.secLeft
            }, 1200), e(l, o.sec, 1), o.type1 = 0), i > 430)) {
            f.animate({
                left: o.minLeft
            }, 1400);
            d.text();
            t(d, o.min, 2), o.type = 0
        }
    });

    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee scrollamount="4" style="padding-top:13px;" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee scrollamount="4" style="padding-top:13px;" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到彩运网</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化

});