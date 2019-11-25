$(function() {
    //index lb
    if ($("#lb_Index").length) {
        var unslider = $("#lb_Index").unslider({
            speed: 500,
            delay: 3500,
            keys: true,
            dots: true,
            arrows: false,
            fluid: false
        })
    }

    $('.arrows .prev').html('<svg class="" style="width: 30px;height: 1.6em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="128 128 800 800" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14680"><path d="M596.992 1023.819h156.131l-326.054-511.819 326.054-511.819h-156.131l-326.114 511.819z" p-id="14681"></path></svg>')
    $('.arrows .next').html('<svg class="" style="width: 30px;height: 1.6em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="128 128 800 800" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14709"><path d="M427.008 0.181h-156.131l326.054 511.819-326.054 511.819h156.131l326.114-511.819z" p-id="14710"></path></svg>')
    var page = (location.href.split('/').pop().match(/.*\.html/) || [])[0] || 'index.html';
    $('.nav li a').each(function() {
        var $this = $(this)
        if($this.attr('href') == page) {
            $this.parent().addClass('active')
        }
    })


    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee scrollamount="4" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee scrollamount="5" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" ></marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化

    if($('.page').length) {
        if(location.hash) {
            showHash(location.hash)
        }
        window.onhashchange = function(){
            showHash(location.hash)
        }
        function showHash(hash) {
            $('.article').hide()
            $('.article' + hash).fadeIn()
            $('.page .menu li').removeClass('active')
            $('.page .menu li a').each(function() {
                var $this = $(this)
                if($this.attr('href') == hash) {
                    $this.parent().addClass('active')
                }
            })
        }
        
    }

    $(window).on('scroll', function() {
        $('.float-nav').toggleClass('type-fixed', $(document).scrollTop() > 200)
    })

    $('.float-nav .close').click(function() {
        $('.float-nav').hide()
    })
})