//公告弹出
function popNotice(e) {
    console.log(e)
    var text = $('#noticeDom').text();
    var arr = text.split(';');
    var ele = '';
    for (k in arr) {
        ele += '<p>' + arr[k] + '</p><br>';
    }

    layer.open({
        type: 1,
        title: '<span class="gundong">最新公告</span>',
        shadeClose: true,
        shade: 0.8,
        area: ['803px', '30%'],
        content: '<div style="padding:10px 20px;"> ' + ele + ' </div>'

    });
}

//nav选项弹出
function hezuo() {
    layer.open({
        type: 1,
        title: '<span class="gundong"></span><img src="img/tl1.png" alt="" />',
        shadeClose: true,
        shade: 0.8,
        area: ['803px', '85%'],
        content: $('#m1')

    });
}

function youhui() {
    layer.open({
        type: 1,
        title: '<span class="gundong"></span><img src="img/tl2.png" alt="" />',
        shadeClose: true,
        shade: 0.8,
        area: ['803px', '85%'],
        content: $('#m2')

    });
}

function answer() {
    layer.open({
        type: 1,
        title: '<span class="gundong"></span><img src="img/tl3.png" alt="" />',
        shadeClose: true,
        shade: 0.8,
        area: ['803px', '80%'],
        content: $('#m3')

    });
}

function about() {
    layer.open({
        type: 1,
        title: '<span class="gundong"></span><img src="img/tl4.png" alt="" />',
        shadeClose: true,
        shade: 0.8,
        area: ['803px', '80%'],
        content: $('#m4')

    });
}


$(function() {
    //首页轮播
    if ($('#slideshow').length) {
        $('#slideshow').cycle({
            fx: 'fade',
            speed: 'slow',
            timeout: 5000,
            pager: '#slider_nav',
            pagerAnchorBuilder: function(idx, slide) {
                return '#slider_nav li:eq(' + (idx) + ') a';
            }
        });
    }

    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee onclick="popNotice(this)" direction="left" scrollamount="4" onmouseover="this.stop()" onmouseout="this.start()">';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp; ;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee onclick="popNotice(this)" direction="left" scrollamount="4" onmouseover="this.stop()" onmouseout="this.start()">欢迎来到双赢彩票网</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
});