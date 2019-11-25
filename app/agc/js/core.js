$(function() {
    //loginbox
    var lg_cover = $('.cover'),
        lg_input = $('.lgipt input');

    lg_cover.on('click', function() {
        var this_Ipt = $(this).siblings('input');
        this_Ipt.focus();
    });

    lg_input.on('focus', function() {
        var this_Cover = $(this).siblings('.cover');
        this_Cover.hide();
    });

    lg_input.on('blur', function() {
        var this_Cover = $(this).siblings('.cover');
        if (!$(this).val().length) {
            this_Cover.show();
        }
    });

    //floatbox
    var close_btn = $('#float_Close'),
    	floatbox = $('.floatbox');

    close_btn.on('click',function(){
    	floatbox.hide();
    });

    $(window,document).scroll(function(){
    	var nscroll = $(document).scrollTop();
    	floatbox.css('top',nscroll+200);
    });
    
    //radio
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 1000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee direction="left" scrollamount="3" scrolldelay="100" width="480" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee direction="left" scrollamount="3" scrolldelay="100" width="480" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到爱购彩</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化
});
