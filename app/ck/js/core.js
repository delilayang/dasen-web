$(function() {
    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 1000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee direction="up" behavior="scroll" scrollamount="1" scrolldelay="20" loop="-1" height="72" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee direction="up" behavior="scroll" scrollamount="1" scrolldelay="20" height="72"  loop="-1" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到彩客网</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化

    $('.nav').on('click', 'a', function() {
        var $this = $(this)
        if($this.attr('href').indexOf('#') == 0) {
            $($this.attr('href')).show().siblings().hide()
            $('.modal').show()
        }
    })

    $('.modal .close').click(function() {
        $('.modal').hide()
    })
})