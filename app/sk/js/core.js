$(function() {
    // popup
    $(".popup").on('click', function loginpopup(){
        $('#loginPopup').fadeIn();
    });

    $(".cross").on('click', function loginpopup(){
        $('#loginPopup').hide();
    });

    //index lb
    if ($("#lg_box").length) {
        var unslider = $("#lg_box").unslider({
            speed: 500,
            delay: 3500,
            keys: true,
            dots: true,
            fluid: false
        })
    }

    //header slideUp
    var header = $('.header');
    $(window, document).scroll(function() {
        nowH = $(window).scrollTop();
        if (nowH > 200) {
            header.slideUp(100);
        } else {
            header.slideDown(100);
        }

    })

    //text show
    var textBox = $('#textBox'),
        textBtn = $('#textBtn');

    textBtn.find('li').on('click', function() {
        textBtn.find('a').removeClass('active');
        $(this).find('a').addClass('active');
        var index = $(this).index();
        textBox.find('li').eq(index).fadeIn().siblings().hide();
    })

    //header nav
    var path = location.pathname,
        navList = $('#nav li');
    if (path.indexOf('reg') > -1) {
        navList.eq(2).addClass('active');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(3).addClass('active');
    }
    //init
    init();

    //radio
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee direction="left" scrollamount="3" scrolldelay="100" width="430" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee direction="left" scrollamount="3" scrolldelay="100" width="430" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到SK彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    $('.float .inner').click(function(e) {
        if(e.target == this) {
            BBOnlineService();
        }
    })

    // activity banner 
    $('.activityContent a, .picArea01').on('click',function() {
       if ($(this).parent().find('.btn').hasClass('down')) {
            close(this);
       } else if ($(this).parent().find('.btn').hasClass('up')) {
            open(this);
       }
    });

    $('.banner').on('click', function() {
        close($(this).parent().parent());
    });

    function close(element) {
        $(element).parent().find('.btn').addClass('up');
        $(element).parent().find('.btn').removeClass('down');
        $(element).parent().find('.picArea01').show();
        $(element).parent().find('.picArea02').hide();
        $(element).parent().find('.text').hide();
        $(element).parent().find('.arrow').removeClass('active');
        $(element).parent().find('.arrowBtn').removeClass('active');
    }

    function open(element) {
        $(element).parent().find('.btn').addClass('down');
        $(element).parent().find('.btn').removeClass('up');
        $(element).parent().find('.picArea01').hide();
        $(element).parent().find('.picArea02').show();
        $(element).parent().find('.text').show();
        $(element).parent().find('.arrow').addClass('active');
        $(element).parent().find('.arrowBtn').addClass('active');
        $(element).parent().find('.banner').hide();
        $(element).parent().find('.banner').show('.stretch');
    }
})
