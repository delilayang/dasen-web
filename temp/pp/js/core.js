$(function() {
    //header nav
    var path = location.pathname,
        navList = $('#nav li');

    if (path.indexOf('agent') > -1) {
        navList.eq(4).addClass('active');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(5).addClass('active');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('active');
    } else if (path.indexOf('index') > -1 || path == '/home/') {
        navList.eq(0).addClass('active');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(2).addClass('active');
    } else if (path.indexOf('mobile') > -1) {
        navList.eq(3).addClass('active');
    }

    //activity menu
    var actiBtns = $('#actiMenu li'),
        actiList = $('#actiList .lis'),
        pics = $('#actiList .pic');


    actiBtns.on('click', function() {
        var $btn = $(this),
            index = $btn.index();
        if (!$btn.hasClass('active')) {
            $btn.addClass('active').siblings().removeClass('active');
            if (index == 0) {
                actiList.show();
            } else {
                for (var i = 0; i < actiList.length; i++) {
                    if (actiList.eq(i).attr('data-type') == index) {
                        actiList.eq(i).show();
                    } else {
                        actiList.eq(i).hide();
                    }
                }
            }
        }
    })


    pics.on('click', function() {
        $(this).next('.text').slideToggle(200);
    })


    //menu tab
    var menuBtns = $('#menu li'),
        menuDetail = $('#list .lis');

    menuBtns.on('click', function() {
        var $btn = $(this),
            index = $btn.index(),
            url = $btn.attr('onclick');

        if (!url && !$btn.hasClass('active')) {
            $btn.addClass('active').siblings().removeClass('active');
            menuDetail.eq(index).fadeIn().siblings().hide();
        }
    })

    //float
    var floatBox = $('#float'),
        floatCtrl = floatBox.find('.ctrl');
    floatCtrl.on('click', function() {
        if (floatCtrl.hasClass('active')) {
            floatBox.animate({ right: '-171px' }, 200)
        } else {
            floatBox.animate({ right: 0 }, 200)
        }
        floatCtrl.toggleClass('active');
    })



    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 1000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到皮皮彩</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
});
