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

    
    $("#float").Float();
    $("#float .close").click(function(){
        $("#float").hide();
    })
    


    //activty nav
    var $actBtns = $('#actiNav a'),
        $actList = $('#actiList li'),
        index = 0;

    $actBtns.on('click', function() {

        if (index == $(this).attr('data-type')) {
            return;
        }
        index = $(this).attr('data-type');
        $(this).siblings().removeClass('on');
        $(this).prependTo($('#actiNav')).addClass('on');
        $actList.hide();
        if (index == 0) {
            $actList.fadeIn();
            return;
        }
        for (var i = 0; i < $actList.length; i++) {
            if ($actList.eq(i).attr('data-type') == index) {
                $actList.eq(i).fadeIn();
            } else {
                $actList.eq(i).hide();
            }
        }
    })

    $actList.on('click',function(){
        $(this).find('.content').toggle()
    })


    //header nav
    var path = location.pathname,
        navList = $('#nav a');

    if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('on');
    } else if (path.indexOf('deposit') > -1) {
        navList.eq(3).addClass('on');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(4).addClass('on');
    } else if (path.indexOf('activty') > -1) {
        navList.eq(2).addClass('on');
    } else if (path.indexOf('agent') > -1) {
        navList.eq(6).addClass('on');
    } else if (path.indexOf('index') > -1 || path == '/') {
        navList.eq(0).addClass('on');
    }

    //text show
    var textBox = $('#rightList'),
        textBtn = $('#leftNav');

    textBtn.find('li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        textBox.find('li').eq(index).fadeIn().siblings().hide();
    })

    //radio
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee direction="left" scrollamount="3" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee direction="left" scrollamount="3" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到爱彩</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化


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
});
