$(function() {

    //购彩大厅下拉
    $(".navul li").hover(function() {
        $(this).find(".xialabx").stop().slideDown(200);
    }, function() {
        $(this).find(".xialabx").stop().slideUp(200);
    });
    $(".zhicitlx").hover(function() {
        $(this).find(".dexiocnxcur").stop().slideDown(200);
    }, function() {
        $(this).find(".dexiocnxcur").stop().slideUp(200);
    });

    //关闭浮动
    $('.closedao').on('click', function() {
        $(this).parent('.rightdao').hide();
    })

    //index count

    function countRun() {
        var nowPlusBox = $('#count .count').eq(1);
        nowPlusBox.text(parseInt(nowPlusBox.text()) + Math.ceil(Math.random() * 200))

        var nowPlusBox = $('#count .count').eq(2);
        nowPlusBox.text(parseInt(nowPlusBox.text()) + Math.ceil(Math.random() * 5))

        var bodyPlusBox = $('#count .count').eq(0);
        bodyPlusBox.text(parseInt(bodyPlusBox.text()) + Math.ceil(Math.random() * 10))

        setTimeout(countRun, 2000);

    }
    countRun();

    //轮播
    function carouselFn(obj, stopTime, slipTime) {
        var stopTime = stopTime ? stopTime : 2000;
        var slipTime = slipTime ? slipTime : 400;
        var obj = $(obj);
        var tutu = obj.find('.tutu')
        var yuandian = obj.find('.yuandian')
        tutu.append(tutu.children('li').eq(0).clone(true));
        var len = tutu.children('li').width();
        var cLength = tutu.children('li').length;
        var iNow = 0;
        for (var i = 0; i < cLength - 1; i++) {
            yuandian.append('<span></span>')
        }
        yuandian.children().eq(0).addClass('cur')
        var leftBtn = function() {
            if (iNow > 0) {
                iNow--;
                tutu.stop().animate({ left: -len * iNow }, slipTime);
                yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
            } else {
                tutu.css({ left: -len * (cLength - 1) })
                iNow = cLength - 2;
                tutu.stop().animate({ left: -len * iNow }, slipTime);
                yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
            }
        }
        var rightBtn = function() {
            if (iNow < cLength - 2) {
                iNow++;
                tutu.stop().animate({ left: -len * iNow }, slipTime);
                yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
            } else {
                tutu.stop().animate({ left: -len * (cLength - 1) }, slipTime, function() {
                    tutu.css({ left: 0 });
                    iNow = 0;
                });
                yuandian.children('span').eq(0).addClass('cur').siblings().removeClass('cur');
            }
        }
        var times = window.setInterval(function() {
            rightBtn();
        }, stopTime)
        obj.hover(function() {
            window.clearInterval(times);
        }, function() {
            times = window.setInterval(function() {
                rightBtn();
            }, stopTime)
        })
        obj.find('.leftBtn').click(function() {
            leftBtn();
        })
        obj.find('.rightBtn').click(function() {
            rightBtn();
        })
        yuandian.children('span').click(function() {
            iNow = $(this).index();
            $(this).addClass('cur').siblings().removeClass('cur');
            tutu.stop().animate({ left: -len * iNow }, slipTime);
            yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
        })
    }
    carouselFn('.banner', 3000);

    //底部广播
    function lunTopFn(obj, time) {
        time = time ? time : 30;
        $(obj).children('ul').append($(obj).children('ul').children().clone(true))
        var len = $(obj).children('ul').height() / 2;
        var times = null;
        if ($(obj)[0]) {
            times = window.setInterval(function() {
                var t = $(obj).children('ul').css('top');
                t = t.replace('px', '');
                if (t > -len) {
                    t--;
                    $(obj).children('ul').css({ top: t })
                } else {
                    $(obj).children('ul').css({ top: 0 })
                }
            }, time)
            $(obj).children('ul').hover(function() {
                window.clearInterval(times);
            }, function() {
                times = window.setInterval(function() {
                    var t = $(obj).children('ul').css('top');
                    t = t.replace('px', '');
                    if (t > -len) {
                        t--;
                        $(obj).children('ul').css({ top: t })
                    } else {
                        $(obj).children('ul').css({ top: 0 })
                    }
                }, time)
            })
        }
    }
    lunTopFn('.luntop', 40);

    //手机页切换
    $(".shoujiqiitm li").click(function() {
        var x = $(this).index();
        $(".shoujiqiebx li").eq(x).fadeIn().siblings().hide();
    });

    // $(".yh1").click(function() {
    //     $(this).siblings(".yh2").toggle();
    // });

    //代理页切换
    $(".yohuqie a").click(function() {
        var x = $(this).attr("datex");
        if (x == 4) {
            return;
        }
        $(this).addClass("cur").siblings().removeClass("cur");
        if (x == 0) {
            $(".youhuiul li").show();
        } else {
            $(".youhuiul li").each(function() {
                var s = $(this).attr("datex");
                if (s == x) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            })
        }
    })

    //活动页drop
    $('#dropbox li').click(function() {
        var nextLi = $(this).next('li');
        if (nextLi.hasClass('drop')) {
            nextLi.siblings('.drop').hide();
            nextLi.toggle();
        }
    })

    //nav背景处理

    var navBtns = $('#nav li'),
        path = location.pathname;

    if (path.indexOf('reg') > -1) {
        navBtns.eq(1).addClass('cur');
    } else if (path.indexOf('mobile') > -1) {
        navBtns.eq(3).addClass('cur');
    } else if (path.indexOf('agent') > -1) {
        navBtns.eq(4).addClass('cur');
    } else if (path.indexOf('deposit') > -1) {
        navBtns.eq(5).addClass('cur');
    } else if (path.indexOf('activity') > -1 || path == '/') {
        navBtns.eq(6).addClass('cur');
    }


    //nav2背景处理
    var nav2Btns = $('#nav2 li');

    if (path.indexOf('about') > -1) {
        nav2Btns.eq(0).addClass('cur');
    } else if (path.indexOf('contact') > -1) {
        nav2Btns.eq(1).addClass('cur');
    } else if (path.indexOf('agent') > -1) {
        nav2Btns.eq(2).addClass('cur');
    } else if (path.indexOf('deposit') > -1) {
        nav2Btns.eq(3).addClass('cur');
    } else if (path.indexOf('withdrawl') > -1) {
        nav2Btns.eq(4).addClass('cur');
    } else if (path.indexOf('faq') > -1) {
        nav2Btns.eq(5).addClass('cur');
    }

    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 3000);
        } else {
            initNoticeData(function(notice) {
                
                if (notice.length) {
                    var html = '<marquee scrollamount="5" scrolldelay="50" width="920" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee scrollamount="5" scrolldelay="50" width="920" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到500万彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 3000);

    init(); //初始化
});
