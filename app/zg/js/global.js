$(document).ready(function() {
    //顶部登录
    $(".login-ipt :input").bind({
        focus: function() {
            var t = $(this).prev();
            $(this).val() == "" ? t.fadeTo("slow", 0.4) : t.fadeTo("slow", 0); },
        blur: function() {
            var t = $(this).prev();
            $(this).val() == "" ? t.fadeTo("slow", 1) : t.fadeTo("slow", 0); },
        keydown: function() { $(this).prev().hide(); }
    });
    $(".login-ipt label").click(function() { $(this).next().focus(); });

    //设置当前页菜单默认值
    var curLocation = location.href.split("/");
    var curPageName = curLocation.slice(curLocation.length - 1, curLocation.length).toString(String).split(".").slice(0, 1).toString(String).toLowerCase();
    var webMenu = $("#webMenu").children();
    var lefNavMenu = $("#lefNavMenu").children();
    switch (curPageName) {
        case "":
            webMenu.eq(0).addClass("cur");
            break;
        case "index":
            webMenu.eq(0).addClass("cur");
            break;
        case "reg":
            webMenu.eq(2).addClass("cur");
            break;
        case "activity":
            webMenu.eq(3).addClass("cur");
            break;
        case "deposit":
            webMenu.eq(4).addClass("cur");
            break;
        case "rule":
            webMenu.eq(6).addClass("cur");
            break;
        case "agent":
            webMenu.eq(7).addClass("cur");
            break;

        case "appdownload":
            webMenu.eq(1).addClass("cur");
            lefNavMenu.eq(1).children().addClass("cur");
            break;
        case "faq":
            webMenu.eq(5).addClass("cur");
            lefNavMenu.eq(2).children().addClass("cur");
            break;
        case "about":
            webMenu.eq(5).addClass("cur");
            lefNavMenu.eq(0).children().addClass("cur");
            break;
        case "generalfaq":
            webMenu.eq(5).addClass("cur");
            lefNavMenu.eq(3).children().addClass("cur");
            break;
        case "techfaq":
            webMenu.eq(5).addClass("cur");
            lefNavMenu.eq(4).children().addClass("cur");
            break;
    }

    //文字闪烁
    //new toggleColor('#MenuActivity', ['#FFFFFF','#FF0000'] , 500 );
    function toggleColor(id, arr, s) {
        var self = this;
        self._i = 0;
        self._timer = null;

        self.run = function() {
            if (arr[self._i]) {
                $(id).css('color', arr[self._i]);
            }
            self._i == 0 ? self._i++ : self._i = 0;
            self._timer = setTimeout(function() {
                self.run(id, arr, s);
            }, s);
        }
        self.run();
    }

    //返回顶部
    $(function() {
        $("#floatTop").click(function() {
            $("html,body").animate({
                scrollTop: 0
            }, 1000);
        });
        $(window).scroll(function() {
            if (navigator.userAgent.indexOf("MSIE") != -1) {
                var fadeSec = 0;
            } else {
                var fadeSec = 300;
            }

            if ($(this).scrollTop() > 300) {
                $('#floatTop').fadeIn(fadeSec);
            } else {
                $('#floatTop').stop().fadeOut(fadeSec);

            }
        });
    });
});
