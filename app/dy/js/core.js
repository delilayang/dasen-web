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

    //gamelist
    if ($('#gameList').length) {
        $('#gameList li').on('click', function() {
            gAlert("请先登陆!");
        })
    }

    //gamelist timecount
    var countFunc = function(initObj) {
        this.fullTime = initObj.fullTime;
        this.dom = $('#' + initObj.dom);
        this.nowLeftTime = initObj.nowLeftTime;
        this.countting();
    }

    countFunc.prototype.reset = function() {
        var that = this;
        that.nowLeftTime = that.fullTime;
        that.countting();
    }

    countFunc.prototype.countting = function() {
        var that = this;

        function run() {
            if (that.nowLeftTime > 0) {
                that.nowLeftTime -= 1;
                that.transform();
                setTimeout(run, 1000)
            } else {
                that.reset();
            }
        }
        run();
    }

    countFunc.prototype.transform = function() {
        var that = this;

        if ((that.fullTime - that.nowLeftTime) < 15) {
            that.dom.html('<span style="font-size:18px;">正在开奖中</span>');
        } else {
            var min = Math.floor(that.nowLeftTime / 60) < 10 ? '0' + Math.floor(that.nowLeftTime / 60) : Math.floor(that.nowLeftTime / 60),
                sec = that.nowLeftTime % 60 < 10 ? '0' + that.nowLeftTime % 60 : that.nowLeftTime % 60;
            that.dom.html(min + ' : ' + sec);
        }
    }

    var count1 = new countFunc({
        fullTime: 300,
        dom: 'count1',
        nowLeftTime: 166
    })

    var count2 = new countFunc({
        fullTime: 600,
        dom: 'count2',
        nowLeftTime: 61
    })

    var count3 = new countFunc({
        fullTime: 300,
        dom: 'count3',
        nowLeftTime: 12
    })


    //nav
    var path = location.pathname,
        navList = $('#nav a');

    if (path.indexOf('agent') > -1) {
        navList.eq(6).addClass('active');
    } else if (path.indexOf('faq') > -1) {
        navList.eq(4).addClass('active');
    } else if (path.indexOf('reg') > -1) {
        navList.eq(1).addClass('active');
    } else if (path.indexOf('index') > -1 || path == '/home/') {
        navList.eq(0).addClass('active');
    } else if (path.indexOf('activity') > -1) {
        navList.eq(2).addClass('active');
    }

    //menu
    var menuBtns = $('#menu a'),
        actiBtns = $('#actiMenu a'),
        textBoxes = $('#detail>div');

    menuBtns.on('click', function() {
        var $btn = $(this);
        if (!$btn.hasClass('active') && !$btn.hasClass('link')) {
            var index = $btn.index();
            $btn.addClass('active').siblings().removeClass('active');
            textBoxes.eq(index).show().siblings().hide();
        }
    })

    actiBtns.on('click', function() {
        var $btn = $(this);

        if (!$btn.hasClass('active')) {
            var index = $btn.index();
            $btn.addClass('active').siblings().removeClass('active');
            actiCheck(index);

        }
    })

    function actiCheck() {
        var index = arguments[0],
            notEmpty;

        if (index != 0) {
            for (var i = 0; i < textBoxes.length; i++) {
                if (textBoxes.eq(i).attr('data-type') == index) {
                    textBoxes.eq(i).show();
                    notEmpty = true;
                } else {
                    textBoxes.eq(i).hide();
                }
            }
        } else {
            if (textBoxes.length > 1) {
                notEmpty = true;
            }
            textBoxes.show();
        }

        if (notEmpty) {
            $('#detail .empty').hide();
        } else {
            $('#detail .empty').show();
        }
    }
    if(actiBtns.length){
        actiCheck(0);
    }
    

    //float
    $("#float").Float();

    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee direction="up" behavior="scroll" scrollamount="2" scrolldelay="20" loop="-1" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee direction="up" behavior="scroll" scrollamount="2" scrolldelay="20" loop="-1" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到多盈彩票网</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
});
