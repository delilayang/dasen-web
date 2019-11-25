$(function() {
    //header timer
    function getTime() {
        var nowDate = new Date(new Date().getTime() - 43200000),
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
        $('#nowTime').text(fullTime);
    }

    setInterval(getTime, 1000);

    //active init
    var path = location.pathname,
        navList = $('#nav li');
    if (path.indexOf('partner') > -1) {
        navList.eq(3).addClass('active');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('active');
    } else if (path.indexOf('withdraw') > -1 || path.indexOf('deposit') > -1) {
        navList.eq(4).addClass('active');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(5).addClass('active');
    } else if (path.indexOf('index') > -1) {
        navList.eq(0).addClass('active');
    }

    //nav background
    var nowact = $('#nav .active'),
        nav = $('#nav'),
        gList = $('#gamelist');
    navList.hover(function() {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).index() == 2) {
            gList.fadeIn(200);
        }
    }, function() {
        $(this).removeClass('active');
        if ($(this).index() == 2) {
            gList.fadeOut(50);
        }
    })

    nav.on('mouseleave', function() {
        nowact.addClass('active');
    })

    //nav game links
    var gameBtns = $('#gamelist a');
    gameBtns.click(function() {
        gAlert('请先登录');
    })

    //float
    $("#float").Float();
    $('#float_close').click(function() {
        $("#float").hide();
    })

    //index lb
    var unslider = $("#lb_Index").unslider({
            speed: 500,
            delay: 5000,
            keys: true,
            dots: true,
            fluid: false
        })
        // $('.arrow').click(function(){
        //  var fn = this.className.split(' ')[1];
        //  unslider.data('unslider')[fn]();
        // })

    //index count

    function countRun() {
            var nowPlusBox = $('#count li').eq(1);
            nowPlusBox.text(parseInt(nowPlusBox.text()) + Math.ceil(Math.random() * 200))

            var nowPlusBox = $('#count li').eq(2);
            nowPlusBox.text(parseInt(nowPlusBox.text()) + Math.ceil(Math.random() * 5))

            var bodyPlusBox = $('#count li').eq(0);
            bodyPlusBox.text(parseInt(bodyPlusBox.text()) + Math.ceil(18 - (Math.random() * 30)));

            setTimeout(countRun, 2000);

    }
    countRun();

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
                    $("#noticeDom").append('<marquee scrollamount="4" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到幸运彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
})
