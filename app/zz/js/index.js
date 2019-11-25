$(function() {
    //header nav
    var path = location.pathname,
        navList = $('#nav li');

    if (path.indexOf('agent') > -1) {
        navList.eq(6).addClass('on');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(4).addClass('on');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('on');
    } else if (path.indexOf('index') > -1 || path == '/') {
        navList.eq(0).addClass('on');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(2).addClass('on');
    }

    //menu tab
    var menuBtns = $('#menu li'),
        menuDetail = $('#detail .neiin');


    menuBtns.on('click', function() {
        var index = $(this).index(),
            url = $(this).attr('onclick');

        if (!url) {
            menuDetail.eq(index).fadeIn().siblings().hide();
        }
    })

    //header time
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
        $('#date').text(fullTime);
    }

    setInterval(getTime, 1000);

    // index lb
    function huxiFn(id) {
        var iNowxx = 0;
        var timexx = null;
        var outTime = 800;
        var inTime = 600;
        var stopTime = 3000;
        var yuandian = $(id).find(".yuandian")
        var tutu = $(id).find('ul.tutu')
        var len2 = tutu.children('li').length;
        for (var i = 0; i < len2; i++) {
            yuandian.append('<span></span>')
        }
        yuandian.children().eq(0).addClass('cur')
        var rightbtn = function() {
            if (iNowxx < len2 - 1) {
                tutu.children('li').eq(iNowxx).stop().fadeOut(outTime);
                iNowxx++;
                yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
                tutu.children('li').eq(iNowxx).stop().fadeIn(inTime);
            } else {
                tutu.children('li').eq(iNowxx).stop().fadeOut(outTime);
                iNowxx = 0;
                tutu.children('li').eq(iNowxx).stop().fadeIn(inTime);
                yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
            }
        }
        var leftbtn = function() {
            if (iNowxx > 0) {
                tutu.children('li').eq(iNowxx).stop().fadeOut(outTime);
                iNowxx--;
                yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
                tutu.children('li').eq(iNowxx).stop().fadeIn(inTime);
            } else {
                tutu.children('li').eq(iNowxx).stop().fadeOut(outTime);
                iNowxx = len2 - 1;
                tutu.children('li').eq(iNowxx).stop().fadeIn(inTime);
                yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
            }
        }
        timexx = window.setInterval(function() {
            rightbtn();
        }, stopTime)
        $(id).hover(function() {
            window.clearInterval(timexx);
        }, function() {
            timexx = window.setInterval(function() {
                rightbtn();
            }, stopTime)
        })
        yuandian.children().click(function() {
            tutu.children('li').eq(iNowxx).fadeOut(outTime);
            iNowxx = $(this).index()
            yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
            tutu.children('li').eq(iNowxx).fadeIn(inTime);
        })
    }
    huxiFn('.banner')

    // gamebox hover
    $(".sai li").hover(function() {
        $(this).children('.zhe').show();
    }, function() {
        $(this).children('.zhe').hide();
    });

    // slider
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
        obj.find('.leftbtn').click(function() {
            leftBtn();
        })
        obj.find('.rightbtn').click(function() {
            rightBtn();
        })
        yuandian.children('span').click(function() {
            iNow = $(this).index();
            $(this).addClass('cur').siblings().removeClass('cur');
            tutu.stop().animate({ left: -len * iNow }, slipTime);
            yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
        })
    }
    carouselFn('.lun', 2000)



    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 1000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee scrollamount="4" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee scrollamount="4" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到至尊彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init();
});
