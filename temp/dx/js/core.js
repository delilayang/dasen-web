$(function() {
    var $listBox = $('#jpList'),
        $navBtn = $('#nav li'),
        $navList = $('#jpList li'),
        $closeBtn = $('#close');
    $navBtn.on('click', function() {
        var index = $(this).index();
        if (index > 1) {
            $listBox.show();
            $navList.eq(index - 2).show().siblings().hide();
            $closeBtn.one('click',function(){
                $listBox.fadeOut(100);
            })
        }
    })

    //float
    $("#float").Float();
    $('#float_close a').click(function() {
        $("#float").hide();
    })


    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee direction="left" scrollamount="3" scrolldelay="100" width="820" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee direction="left" scrollamount="3" scrolldelay="100" width="820" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到大唐</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
})
