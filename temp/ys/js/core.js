$(function() {

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

    //index user number change
    var userNum = function() {
        var nowNum = $('#userNum').text(),
            newNum = nowNum - 0 + Math.floor(Math.random() * 300) - 150;
        $('#userNum').text(newNum);
    }

    setInterval(userNum, 3000);


    //rules
    var rulesBoxes = $('#rules li'),
        textBoxes = $('#rules .text');

    rulesBoxes.on('click', function() {
        var $btn = $(this),
            textBox = $btn.find('.text');

        if (!$btn.hasClass('on')) {
            textBoxes.slideUp();
            $btn.addClass('on').siblings().removeClass('on');
            textBox.slideDown();
        } else {
            $btn.removeClass('on');
            textBox.slideUp();
        }

    })

    // //left menu
    // var menuBtns = $('#menu li'),
    //     menuBoxes = $('#menubox li');

    // menuBtns.on('click', function() {
    //     var $btn = $(this);
    //     if ($btn.hasClass('jump')) {
    //         return;
    //     }
    //     if (!$btn.hasClass('active')) {
    //         var index = $btn.index();
    //         $btn.addClass('active').siblings().removeClass('active');
    //         menuBoxes.eq(index).fadeIn().siblings().hide();
    //     }
    // })

    // //activity nav
    // var $actBtns = $('#actTab li'),
    //     $actList = $('#actList li'),
    //     index = 0;

    // //activity init
    // if ($actList.length == 1) {
    //     for (var i = 0; i < $actList.length; i++) {
    //         if ($actList.eq(i).attr('data-type') == 5) {
    //             $actList.eq(i).fadeIn();
    //         }
    //     }
    // }

    // $actBtns.on('click', function() {
    //     if (!$(this).hasClass('active')) {
    //         var index = $(this).index(),
    //             isHas = false;

    //         $(this).addClass('active').siblings().removeClass('active');
    //         $actList.hide();

    //         if ($actList.length == 1) {
    //             $actList.fadeIn();
    //             return;
    //         } else {
    //             if (index == 0) {
    //                 for (var i = 0; i < $actList.length; i++) {
    //                     if ($actList.eq(i).attr('data-type') != 0) {
    //                         $actList.eq(i).fadeIn();
    //                     }
    //                 }
    //                 return;
    //             } else {
    //                 for (var i = 0; i < $actList.length; i++) {
    //                     if ($actList.eq(i).attr('data-type') == index) {
    //                         $actList.eq(i).fadeIn();
    //                         isHas = true;
    //                     }
    //                 }
    //                 if (!isHas) {
    //                     for (var i = 0; i < $actList.length; i++) {
    //                         if ($actList.eq(i).attr('data-type') == 0) {
    //                             $actList.eq(i).fadeIn();
    //                             break;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }

    // })


    //index active init
    var path = location.pathname,
        navList = $('#nav li');

    if (path.indexOf('agent') > -1) {
        navList.eq(10).addClass('active');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(2).addClass('active');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(14).addClass('active');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(6).addClass('active');
    } else if (path.indexOf('appdown') > -1) {
        navList.eq(4).addClass('active');
    } else if (path.indexOf('rules') > -1) {
        navList.eq(8).addClass('active');
    } else if (path.indexOf('about') > -1) {
        navList.eq(12).addClass('active');
    } else if (path.indexOf('index') > -1 || path == '/home/') {
        navList.eq(0).addClass('active');
    }

    //float
    $("#float").Float();

    $('#float_close a').click(function() {
        $("#float").hide();
    })

    // qqnum
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

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee scrollamount="5" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到永盛彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化



})