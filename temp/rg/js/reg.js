$(document).ready(function() {
    window.setTimeout(function() {
        $(".loading").fadeOut(500)
    }, 400);
    $(window).scroll(function() {
        var sc = $(window).scrollTop();
        $(".rightdao").stop().animate({
            top: sc + 220
        }, 400);
    });
    $(".closedao").click(function() {
        $(this).parent().hide();
    });

    $(".nav li a").click(function() {
        var x = $(this).attr("datx");
        var htm = $(this).html();
        if (x) {
            layer.open({
                type: 1,
                title: '<span class="gundong"></span><div class="datlt">' + htm + '</div><div class="bgmxs"></div> ',
                skin: 'layui-layer-demo',
                anim: 2,
                area: ['638px', '80%'],
                //title:"",
                shadeClose: true,
                content: $(x)
            });
        }

    })

    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 1000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee scrollamount="3" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee scrollamount="3" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到热购彩票</marquee>');
                }
            });
        }
    };
    setTimeout(initNotice, 2000);
    init();
})