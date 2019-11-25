/** 顶部相关JS start */
function cancelMouse() {
    return false;
}

document.oncontextmenu = cancelMouse;

$(function() {
    //固定主選單
    $("#navfixed").navFixed();
});

(function() {
    var flashvars = {},
        params = {
            wmode: 'transparent',
            quality: 'high'
        },
        attributes = {
            id: 'logo-flash',
            title: '首页'
                // 	                ,onmousedown: "top.mem_index.location.href='./'"
        };
    swfobject.embedSWF('./image/logo1.swf', 'ele-logo-wrap', '298', '108', '0.0.0.0', './expressInstall.swf', flashvars, params, attributes);
    // flash 停用時，避免替代圖因大小不一出現雙層疊影
    $('#ele-logo-wrap').css('background-image', 'none');
})();


$.fn.navFixed = function(setting) {
    var _o = this,
        conf = {
            fixedClass: 'fixed',
            fixedTop: 0
        };

    $.extend(conf, setting);

    return this.each(function() {
        var $target = $(_o),
            targetTop = $target[0].offsetTop,
            fixedTop = parseInt(conf.fixedTop, 10) || 0,
            criticalTop = targetTop - fixedTop;
        $(window).scroll(function() {
            var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop,
                scrollLeft = (document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft;
            if (scrollTop > criticalTop) {
                if (!$target.hasClass(conf.fixedClass)) {
                    $target.addClass(conf.fixedClass);
                }
                $target.children().css({ left: -scrollLeft });
            } else if ($target.hasClass(conf.fixedClass)) {
                $target.removeClass(conf.fixedClass);
            }
        });
    });
};
/** 顶部相关JS end */


/** 右边浮动层相关样式 start */
$("#float_r_ight").Float();

$('#float_close a').click(function() {
    $("#float_r_ight").hide();
})

/** 右边浮动层相关样式 end */
