$(function() {
    //nav
    // var path = location.pathname,
    //     navList = $('#nav a');

    // if (path.indexOf('agent') > -1) {
    //     navList.eq(4).addClass('active');
    // } else if (path.indexOf('faq') > -1) {
    //     navList.eq(5).addClass('active');
    // } else if (path.indexOf('reg') > -1) {
    //     navList.eq(1).addClass('active');
    // } else if (path.indexOf('index') > -1 || path == '/home/') {
    //     navList.eq(0).addClass('active');
    // } else if (path.indexOf('activity') > -1) {
    //     navList.eq(2).addClass('active');
    // } else if (path.indexOf('mobile') > -1) {
    //     navList.eq(3).addClass('active');
    // }

    function menuCtrl() {

        var menuLis = $('#nav a'),
            showBox = $('#show_Lis'),
            showLis = $('#show_Lis li'),
            showTit = showBox.find('.tittext'),
            showClo = showBox.find('.closebtn');

        menuLis.click(function() {
            var index = $(this).attr('data-tag'),
                text = $(this).text();
            if (!index) {
                return;
            }
            showLis.eq(index).show();
            showTit.text(text);
            showBox.show();
            showClo.one('click', function() {
                showBox.hide();
                showLis.eq(index).hide();
            })
        })
    }

    menuCtrl();

    //road line
    if ($('#roadLine').length) {
        // 只有下载好背景图才执行对联下滑
        var img = new Image();
        img.src = 'img/bg.jpg';
        if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用
            setInterval(moveLine1, 250);
            setInterval(moveLine2, 250)
        } else {
            img.onload = function() { //图片下载完毕时异步调用
                setInterval(moveLine1, 250);
                setInterval(moveLine2, 250)
            }
        }

        function moveLine1() {
            $(".line1 .li").addClass("animate");
            $(".line1 .li11").removeClass("animate").fadeOut(150);
            var len = $(".line1 .li").length;
            $(".line1 .li").each(function() {
                var clas = $(this).attr('class');
                clasarr = clas.split(" ");
                var num;
                $(clasarr).each(function(i, d) {
                    var n = Number(d.replace(/[^0-9]*/ig, ''));
                    if (n) {
                        num = n;
                        return;
                    }
                })
                $(this).removeClass("li" + num);
                if (num == len) {
                    num = 0;
                }
                num++;
                $(this).addClass("li" + num);
                setTimeout(function() {
                    $(".line1 .li1").fadeIn(100);
                }, 100)
            })
        }

        function moveLine2() {
            $(".line2 .li").addClass("animate");
            $(".line2 .li6").removeClass("animate").fadeOut(150);
            var len = $(".line2 .li").length;
            $(".line2 .li").each(function() {
                var clas = $(this).attr('class');
                clasarr = clas.split(" ");
                var num;
                $(clasarr).each(function(i, d) {
                    var n = Number(d.replace(/[^0-9]*/ig, ''));
                    if (n) {
                        num = n;
                        return;
                    }
                })
                $(this).removeClass("li" + num);
                if (num == len) {
                    num = 0;
                }
                num++;
                $(this).addClass("li" + num);
                setTimeout(function() {
                    $(".line2 .li1").fadeIn(100);
                }, 100)
            })
        }
    }


    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                var $nl = $('#notice-list');
                $nl.html(notice.reduce(function(p, n) {
                    return p += '<li data-content="' + n.message + '">' + n.title + '</li>';
                }, ''))
                setTimeout(function() {
                    $("#noticeDom").slide({
                        mainCell: ".notice-content ul",
                        interTime: 3000,
                        autoPage: true,
                        effect: "top",
                        autoPlay: true,
                        vis: 1
                    });
                    $(".notice-list").on("click", "li", function() {
                        layer.open({
                            shade: .5,
                            btn: false,
                            shadeClose: true,
                            title: "系统公告",
                            content: $(this).data("content"),
                            skin: "bgIndex"
                        });
                    });
                }, 200)
            });
            
            
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
});
