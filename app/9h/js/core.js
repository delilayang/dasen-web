$(function() {
    var menuCtrl = function() {
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
    }();

    //radio
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 1000);
        } else {
            initNoticeData(function(notice) {

                if (notice.length) {
                    var html = '<marquee direction="up" behavior="scroll" scrollamount="2" scrolldelay="20" loop="-1" width="250" height="82" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee direction="up" behavior="scroll" scrollamount="2" scrolldelay="20" loop="-1" width="250" height="82" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到500万彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 3000);

    init(); //初始化
})
