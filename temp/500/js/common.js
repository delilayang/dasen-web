// JavaScript Document
$(function() {
    $(".actcon ul li .mores").click(function() {
        $(this).toggleClass("dtbg");
        $(this).next(".acttxt2").toggleClass("hidden")
    })

    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 3000);
        } else {
            initNoticeData(function(notice) {

                if (notice.length) {
                    var html = '<marquee scrollamount="3" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee scrollamount="3" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到500彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 3000);

    init(); //初始化
})