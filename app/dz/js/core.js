$(function() {

    // if (location.host == "www.dzcp567.com") {
    //     if (!$.cookie('intr') && !$.cookie('user') && !localStorage.getItem('isUser')) {
    //         $('#agent').show();
    //     } else {
    //         localStorage.setItem('isUser', true);
    //     }

    //     if (location.hash == "#delAgent!") {
    //         localStorage.clear();
    //         $.cookie('user', '', { expires: -1 });
    //         $.cookie('intr', '', { expires: -1 });
    //     }
    // }else{
    //     $('#agent').show();
    // }

    var Timer = function(fun, ms) {
        var timer,
            delay = ms;

        return {
            start: function() {
                timer = setInterval(fun, delay);
            },
            stop: function() {
                timer && clearInterval(timer);
            },
            setDelay: function(ms) {
                delay = ms;
            }
        };
    }

    $('#close').on('click', function() {
        $('#float').hide();
    })

    var Scroll = function($el, options) {
        var opts = $.extend({}, options);

        // 延迟
        var delay = opts.delay ? opts.delay : 5000;
        // 速度
        var speed = opts.speed ? opts.speed : 1000;
        // 可见个数
        var vis = opts.vis ? opts.vis : 1;
        // 滚动元素子元素
        var $items = $el.children();
        // 个数
        var sLen = $items.size();
        // 子元素高度
        var oHeight = $items.outerHeight(true);

        var run = function() {
            $el.animate({
                'margin-top': -oHeight
            }, speed, function() {
                $el.css('margin-top', 0);
                $el.append($el.children(":first"));
            });
        }

        var timer = new Timer(run, delay);

        return {
            start: function() {
                timer.stop();
                if (sLen > vis) {
                    timer.start();
                }
            },
            stop: function() {
                timer.stop();
            }
        };
    }

    var App = function() {
        var cfg = {
            type: 1,
            area: ["650px", "600px"],
            shade: .5,
            shadeClose: true,
            scrollbar: false
        }
        return {
            init: function() {
                new Scroll($("#notice-list")).start();

                $(".open-le").on("click", function() {
                    App.latestEvents();
                });

                $(".open-aj").on("click", function() {
                    App.agencyJoin();
                });

                $(".open-faq").on("click", function() {
                    App.faq();
                });

                $(".open-au").on("click", function() {
                    App.aboutus();
                });

                $(".open-mb").on("click", function() {
                    App.mobile();
                });
            },
            latestEvents: function() {
                layer.open($.extend({}, cfg, {
                    title: "最新优惠",
                    content: $("#latestEvents")
                }));

                $("#latestEvents").niceScroll({
                    cursorwidth: "0",
                    cursorborder: "0"
                });
            },
            agencyJoin: function() {
                layer.open($.extend({}, cfg, {
                    title: "代理加盟",
                    content: $("#agencyJoin")
                }));

                $("#agencyJoin").niceScroll({
                    cursorwidth: "0",
                    cursorborder: "0"
                });
            },
            mobile: function() {
                layer.open($.extend({}, cfg, {
                    title: "手机购彩",
                    content: $("#mobile")
                }));

                $("#agencyJoin").niceScroll({
                    cursorwidth: "0",
                    cursorborder: "0"
                });
            },
            faq: function() {
                layer.open($.extend({}, cfg, {
                    title: "常见问题",
                    content: $("#faq")
                }));

                $("#faq").niceScroll({
                    cursorwidth: "0",
                    cursorborder: "0"
                });
            },
            aboutus: function() {
                layer.open($.extend({}, cfg, {
                    title: "关于我们",
                    content: $("#aboutus")
                }));

                $("#aboutus").niceScroll({
                    cursorwidth: "0",
                    cursorborder: "0"
                });
            }
        };
    }();


    App.init();


    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee scrollamount="3" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee scrollamount="3" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到大众彩票网</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
});
