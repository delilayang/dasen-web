var App = function() {
    var cfg = {
        type: 1,
        area: ["760px", "68%"],
        shade: .5,
        shadeClose: true,
        skin: "bgIndex"
    }
    return {
        init: function() {
            $(".site-notice").slide({
                mainCell: ".notice-content ul",
                interTime: 3000,
                autoPage: true,
                effect: "top",
                autoPlay: true,
                vis: 1
            });
            // 只有下载好背景图才执行对联下滑
            var img = new Image();
            img.src = 'img/login_bg.png';
            if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用
                carInter();
                setInterval(carInter, 7000);
            } else {
                img.onload = function() { //图片下载完毕时异步调用
                    carInter();
                    setInterval(carInter, 7000);
                }
            }

            function carInter() {
                $(".car-con2").hide();
                $(".car-con2 .car").removeClass("animate animate2");
                $(".car-con1").show();
                $(".car-con1 .car").addClass("animate");
                setTimeout(function() {
                    $(".car-con1 .car").removeClass("animate");
                    $(".car-con1").hide();
                    $(".car-con2").show();
                    $(".car-con2 .car").css("transform", "translate(0) scale(1)");
                    $(".car-con2 .car").addClass("animate2");
                }, 5000);
            }
            $(".notice-list li").on("click", function() {
                layer.open({
                    shade: .5,
                    btn: false,
                    shadeClose: true,
                    title: "系统公告",
                    content: $(this).data("content"),
                    skin: "bgIndex"
                });
            });
            $(".yun").slide({
                mainCell: ".bd ul",
                autoPlay: true,
                effect: "leftMarquee",
                vis: 1,
                interTime: 50,
                trigger: "titCell",
                mouseOverStop: false
            });
            $(".input-group input").keypress(function(a) {
                if (13 == a.keyCode) return $("#btnlogin").click(), !1;
            });
            $("#btnlogin").click(function() {
                var a = $("#username").val(),
                    b = $("#password").val(),
                    c = $("#validatecode").val();
                doLogin(a, b, c);
            });
            $(".open-le").on("click", function() {
                App.latestEvents();
            });

            $(".open-aj").on("click", function() {
                App.agencyJoin();
            });
            $(".open-mo").on("click", function() {
                App.mobile();
            });
            $(".open-faq").on("click", function() {
                App.faq();
            });

            $(".open-au").on("click", function() {
                App.aboutus();
            });

            setTimeout(function() {
                if(location.hash) {
                    $('.' + location.hash.slice(1)).click()
                }
            }, 500)
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
        mobile: function() {
            layer.open({
                type: 1,
                area: ["630px", "589px"],
                shade: .5,
                shadeClose: true,
                title: "手机投注",
                skin: "bgmobile",
                content: $("#mobile")
            });

            $("#mobile").niceScroll({
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
