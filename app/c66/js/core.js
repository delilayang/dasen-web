$(document).ready(function() {
    //header nav
    var path = location.pathname,
        navList = $('#nav a');

    if (path.indexOf('agent') > -1) {
        navList.eq(6).addClass('on');
    } else if (path.indexOf('bank') > -1) {
        navList.eq(3).addClass('on');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('on');
    } else if (path.indexOf('index') > -1 || path == '/') {
        navList.eq(0).addClass('on');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(2).addClass('on');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(4).addClass('on');
    }

    //activity
    $(".img1").click(function() {
        $(this).next('.detail').slideToggle();
    });

    // tab
    $(".datema  a").click(function() {
        if (!$(this).attr('datem')) {
            return;
        }
        $(this).addClass("cur").siblings().removeClass("cur");
        var x = $(this).attr("datem");
        if (x == 0) {
            $(".hui,.neizi").show();
        } else {
            $(".hui,.neizi").each(function() {
                var s = $(this).attr("datem");
                if (s == x) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            })
        }
    })

    //activity
    if ($('#dayLogin')) {
        $.ajax({
            type: "get",
            url: '/static/data/acti.js?t=' + Math.random(),
            dataType: "json",
            success: function(data) {
                var html = '';

                for (var j = 0; j < data.length; j++) {
                    if (data[j].activityType == 1) {
                        var objs = data[j].details;
                        for (var i = 0; i < objs.length; i++) {
                            var obj = objs[i],
                                dayCount = obj.activitySort,
                                betMoney = obj.betMoney,
                                rechMoney = obj.rechMoney,
                                continuousTimes = obj.continuousTimes;

                            html += '<li>•第' + dayCount + '天 充值' + rechMoney + '元 投注量' + betMoney + '元 获得' + continuousTimes + '次抽奖机会</li>';

                        }
                    }
                }

                if(html.length){
                    $('#dayLogin').html(html);
                }
            }
        });

    }

    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee scrollamount="2" direction="up" behavior="scroll" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee scrollamount="2" behavior="scroll" direction="up" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到彩66彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化

});
