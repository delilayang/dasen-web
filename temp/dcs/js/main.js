$(document).ready(function() {
    /*function c() {
        $("#trans_list").load("/trans")
    }
    c();
    setInterval(c, 60000);*/
    var a = setInterval(function() {
        var h = moment().format("DD / MM / YYYY HH:mm:ss");
        $(".date").text(h)
    },
    1000);
    $(".in-game").click(function() {
        var h = $(this).attr("class");
        if (h != "more") {
            if (!$(".login").is(":hidden")) {
                var i;
                if (doLogin) {
                    i = {
                        "游客登录": function() {
                            alert(msg);
                            doLogin("!guest!", "!guest!")
                        }
                    }
                }
                dialog.error("消息", "您还没有登录！", i);
                return false
            }
        }
    });
    $(".js-tilt").tilt({
        scale: 1.2
    });
    $(".play icon a").click(function() {
        var h = $(this).attr("class");
        if (h != "more") {
            if (!$(".login").is(":hidden")) {
                var i;
                if (doLogin) {
                    i = {
                        "游客登录": function() {
                            alert(msg);
                            doLogin("!guest!", "!guest!")
                        }
                    }
                }
                dialog.error("消息", "您还没有登录！", i);
                return false
            }
        }
    });
    randomizeGlare();
    getCurrentGame();
    var e = document.getElementById("scene");
    if (e) {
        var d = new Parallax(e, {
            relativeInput: true
        })
    }
    var b = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        autoplay: {
            delay: 5000
        },
        pagination: {
            el: ".swiper-pagination"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        scrollbar: {
            el: ".swiper-scrollbar"
        }
    });
    var g = new Swiper(".swiper-container-phone", {
        direction: "horizontal",
        loop: true,
        flipEffect: {
            rotate: 30,
            slideShadows: false
        }
    });
    window.sr = ScrollReveal();
    scrollReveal(".line.left", 1000, 0, 100, "right");
    scrollReveal(".line.right", 1000, 0, 100, "left");
    scrollReveal(".service-footer", 600, 0, 345, "bottom");
    scrollReveal(".game-title .game-start", 600, 300, 345, "right");
    scrollReveal(".game-title .game-end", 600, 600, 345, "right");
    scrollReveal(".game-bg", 600, 800, 345, "right");
    scrollReveal(".current-game", 600, 900, 345, "right");
    scrollReveal(".games-container .button.go", 600, 1000, 345, "bottom");
    scrollReveal(".games-container .more-games", 600, 1000, 345, "right");
    scrollReveal(".games-container .wrapper .right", 600, 100, 345, "right");
    scrollReveal(".phone-wrapper .mobile1", 600, 0, 345, "bottom");
    scrollReveal(".phone-wrapper .mobile2", 600, 400, 100, "right");
    scrollReveal(".phone-wrapper .mobile3", 600, 400, 100, "left");
    scrollReveal(".phone-wrapper .mobile4", 600, 800, 200, "right");
    scrollReveal(".phone-wrapper .mobile5", 600, 800, 200, "left");
    scrollReveal(".phone-wrapper .mickey", 600, 800, 200, "left");
    stragerScrollReveal(".service-wrapper > div", 600, 200, 300, "bottom");
    stragerScrollReveal(".service .service-item", 600, 100, 300, "bottom");
    stragerScrollReveal(".service.mobile .service-item", 600, 100, 300, "right");
    stragerScrollReveal(".partner li", 600, 100, 200, "bottom");
    var f = false;
    $(window).scroll(function() {
        if ($(".service-item").visible() && !f) {
            f = true;
            increaseServiceAmount("span.deposit-value", 25, 100, "");
            increaseServiceAmount("span.withdraw-value", 120, 30, "time");
            increaseServiceAmount("span.bank-value", 34, 100, "")
        }
        if ($(window).scrollTop() > 100) {
            $(".sticky-nav-list .back-to-top").css("opacity", "1")
        } else {
            $(".sticky-nav-list .back-to-top").css("opacity", "0")
        }
    });
    $(".sticky-nav-list .back-to-top a").click(function(h) {
        h.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        })
    });
    tabContentItemToggle(".sub-content-item-header", ".sub-content-item-content");
    tabSwitchContentToggle(".tab-container.left-panel .tab-switch ul li a", ".tab-container.left-panel .tab-content .sub-content")
    
    
    
    init();
    //菜单高亮处理
    $('.nav-list a').each(function () { 
        $(this).toggleClass('active', '/' + $(this).attr('href') == location.pathname)
    })

});
function randomizeGlare() {
    $(".game-list .game-item").each(function(a, b) {
        var e = Math.floor(Math.random() * 10) + 1;
        var c = Math.floor(Math.random() * 5) + 1;
        var d = a + 1;
        $(".game-item:nth-child(" + d + ") .glare").css("top", e + "px");
        $(".game-item:nth-child(" + d + ") .glare").css("left", e + "px");
        $(".game-item:nth-child(" + d + ") .glare").css("animation-duration", e + "s")
    })
}
function getCurrentGame() {
    $(".game-item a").click(function(c) {
        c.preventDefault();
        var a = $(this).attr("class");
        var b = $(this).text();
        $(".current-game div").attr("class", "");
        $(".current-game div").addClass(a);
        $(".current-game div").addClass("blur");
        setTimeout(function() {
            $(".current-game div").removeClass("blur")
        },
        600);
        $("#in-game").attr("href", "/member/index?lottery=" + b)
    })
}
function scrollReveal(a, d, c, e, b) {
    sr.reveal(a, {
        duration: d,
        delay: c,
        distance: e + "px",
        origin: b
    })
}
function stragerScrollReveal(a, e, c, f, b) {
    for (var d = 1; d <= $(a).length; d++) {
        sr.reveal(a + ":nth-child(" + d + ")", {
            duration: e,
            delay: c * d,
            distance: f + "px",
            origin: b
        })
    }
}
function increaseServiceAmount(b, a, f, c) {
    var e = 0;
    var d = setInterval(function() {
        e += 1;
        if (c === "time") {
            var g = moment.utc(e * 1000).format("mm:ss");
            $(b).text(g)
        } else {
            $(b).text(e)
        }
        if (e === a) {
            clearInterval(d)
        }
    },
    f)
}
function tabContentItemToggle(a, b) {
    $(a).click(function(c) {
        c.preventDefault();
        $(this).siblings(b).slideToggle()
    })
}
function tabSwitchContentToggle(a, b) {
    $(a).click(function(d) {
        d.preventDefault();
        $(this).parent("li").addClass("active");
        $(a).not($(this)).parent("li").removeClass("active");
        var c = $(this).parent("li").index() + 1;
        $(b + ":nth-child(" + c + ")").addClass("active");
        $(b + ":not(:nth-child(" + c + "))").removeClass("active")
    })
};



/*login*/
/*
var msg = "游客盘口只供试玩，与正式会员盘口无关!";
$(function() {
    $("#login-captcha").click(function() {
        $(this).attr("src", "code?_=" + (new Date()).getTime())
    });

    $(".login input").keypress(function(a) {
        if (a.keyCode == 13) {
            $("#btnlogin").click();
            return false
        }
    });
    $("#btn-register").click(function() {
        location.href = "/register"
    });
    $("#btnlogin").click(function() {
        console.log("sdfs");
        var c = $("#username").val();
        var a = $("#password").val();
        var b = $("#vcode").val();
        if (c == "") {
            dialog.error("消息", "用户名和密码都不能为空");
            return
        }
        if (a == "") {
            dialog.error("消息", "用户名和密码都不能为空");
            return
        }
        if (b == "") {
            dialog.error("消息", "验证码不能为空");
            return
        }

    })
});


$('.customer-service a').click(function(e){
    e.preventDefault();

    $(this).siblings('.sticky-hidden.kefu').toggleClass('show');

    $('#kefu-popup').click(function(e){
        popup("kefu");
        $('.sticky-hidden.kefu').removeClass('show');
    });

    function popup(url){
        var width  = 540;
        var height = 600;
        var left   = screen.width - 660;
        var top    = 0;
        var params = 'width='+width+', height='+height;
        params += ', top='+top+', left='+left;
        params += ', directories=no';
        params += ', location=no';
        params += ', menubar=no';
        params += ', resizable=no';
        params += ', scrollbars=no';
        params += ', status=no';
        params += ', toolbar=no';
        newwin=window.open(url,'customWindow', params);

        setWindowTitle(newwin) // Starts checking

        function setWindowTitle(newwin)
        {
            if(newwin.document) // If loaded
            {
                newwin.document.title = "";
            }
            else // If not loaded yet
            {
                setTimeout(setWindowTitle, 10); // Recheck again every 10 ms
            }
        }
        if (window.focus) {
            newwin.focus()
        }
        return false;
    }
});
*/