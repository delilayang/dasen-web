//========================基于Layer插件 有刷新代码========================
function Get_Api_Loging(var1, var2, var3, var4, var5) {
    if (var4 != "") {
        title = var4;
    } else {
        title = false;
    }
    layer.open({
        type: 2,
        title: title,
        skin: 'layui-layer-rim',
        area: [var2, var3],
        fix: false,
        shadeClose: true,
        border: [5, 0.4, '#000'], //用于控制层的框
        fadeIn: 300, //用于控制层渐显弹出值为毫秒数
        shade: [0.1, '#000'], //用于控制层的背景
        content: var1, //iframe的url
        end: function(index) {
            window.location.href = var5;
        }
    });
}
//======================以上基于Layer插件 无刷新代码======================



//========================基于Layer插件 有刷新代码========================
function Get_Api_Log(var1, var2, var3, var4) {
    if (var4 != "") {
        title = var4;
    } else {
        title = false;
    }
    layer.open({
        type: 2,
        title: title,
        skin: 'layui-layer-rim',
        area: [var2, var3],
        fix: true,
        shadeClose: true,
        border: [5, 0.4, '#000'], //用于控制层的框
        fadeIn: 300, //用于控制层渐显弹出值为毫秒数
        shade: [0.1, '#000'], //用于控制层的背景
        content: var1, //iframe的url
        end: function(index) {}
    });
}
//======================以上基于Layer插件 无刷新代码======================








//========================基于Layer插件 有刷新代码========================
function Get_Api_Map(var1, var2, var3, var4, var5) {
    title = "设置经纬度";
    var student = new Object();
    student.longitude = var4;
    student.latitude = var5;
    // 此时 iframeA.html 页面可以使用 art.dialog.data('test') 获取到数据，如：

    $.layer({
        type: 2,
        title: title,
        area: [var2, var3],
        fix: false,
        shadeClose: true,
        closeBtn: [0, true],
        border: [5, 0.4, '#000'], //用于控制层的框
        fadeIn: 300, //用于控制层渐显弹出值为毫秒数
        shade: [0.1, '#000'], //用于控制层的背景
        iframe: { src: var1 + "?longitude=" + var4 + "&latitude=" + var5 },

    });
}
//======================以上基于Layer插件 无刷新代码======================










//========================基于Layer插件 有刷新代码========================
function Get_Api_layer(var1, var2, var3, var4) {
    if (var4 != "") {
        title = var4;
    } else {
        title = false;
    }
    layer.open({
        type: 2,
        title: title,
        skin: 'layui-layer-rim',
        area: [var2, var3],
        fix: false,
        shadeClose: true,
        border: [5, 0.4, '#000'], //用于控制层的框
        fadeIn: 300, //用于控制层渐显弹出值为毫秒数
        shade: [0.1, '#000'], //用于控制层的背景
        content: var1, //iframe的url
        end: function(index) {
            location.reload(); //自动关闭后可做一些刷新页面等操作
        }
    });
}
//======================以上基于Layer插件 无刷新代码======================



//========================基于Layer插件 有刷新代码========================
function Get_layer(var1, var2, var3, var4) {
    if (var4 != "") {
        title = var4;
    } else {
        title = false;
    }
    layer.open({
        type: 2,
        title: title,
        skin: 'layui-layer-rim',
        area: [var2, var3],
        fix: false,
        moveOut: true,
        shadeClose: true,
        border: [5, 0.4, '#000'], //用于控制层的框
        fadeIn: 300, //用于控制层渐显弹出值为毫秒数
        content: var1
    });
}
//======================以上基于Layer插件 无刷新代码======================





//悬浮广告
var duilian = $("div.duilian");
var duilian_close = $("a.duilian_close");

var screen_w = screen.width;
if (screen_w > 1024) { duilian.show(); }
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    duilian.stop().animate({ top: scrollTop + 2 });
});
duilian_close.click(function() {
    $(this).parent().hide();
    return false;
});


$(function() {
    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee scrollamount="4" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee scrollamount="4" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到满堂彩/marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
})