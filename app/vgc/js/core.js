$(function() {
    //index lb
    if ($("#lb_box").length) {
        var unslider = $("#lb_box").unslider({
            speed: 500,
            delay: 3500,
            keys: true,
            arrows: true,
            fluid: false
        })
    }

    //header nav
    var path = location.pathname,
        navList = $('#nav a');

    if (path.indexOf('agent') > -1) {
        navList.eq(6).addClass('active');
    } else if (path.indexOf('bank') > -1) {
        navList.eq(3).addClass('active');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('active');
    } else if (path.indexOf('index') > -1 || path == '/') {
        navList.eq(0).addClass('active');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(2).addClass('active');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(4).addClass('active');
    }

    // tab
    var tabLi = $("#tab li"),
        actTabLi = $("#activityTab li"),
        tabMain = $('#tabDetail .item');

    tabLi.click(function() {
        var $btn = $(this);

        if ($btn.hasClass('active')) {
            return;
        }

        var index = $btn.index();

        if (!tabMain.eq(index).length) {
            return;
        }

        $btn.addClass('active').siblings().removeClass('active');
        tabMain.eq(index).fadeIn().siblings().hide();

    })

    //activity tab
    actTabLi.click(function() {
        var $btn = $(this);

        if ($btn.hasClass('active')) {
            return;
        }

        var index = $btn.index();

        $btn.addClass('active').siblings().removeClass('active');
        
        if (!index) {
            tabMain.show();
        } else {
            for (var i = 0; i < tabMain.length; i++) {
                if (tabMain.eq(i).attr('data-kind') == index) {
                    tabMain.eq(i).show();
                } else {
                    tabMain.eq(i).hide();
                }
            }
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
                    $("#noticeDom").html('<marquee scrollamount="5" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到微购彩</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化

});
