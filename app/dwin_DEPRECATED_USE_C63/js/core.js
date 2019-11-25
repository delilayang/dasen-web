$(function() {
    function getTime() {
        var nowDate = new Date(new Date().getTime() - 43200000),
            nY = nowDate.getFullYear(),
            nM = nowDate.getMonth() + 1,
            nD = nowDate.getDate(),
            nH = nowDate.getHours(),
            nMi = nowDate.getMinutes(),
            nS = nowDate.getSeconds();
        nM = nM < 10 ? '0' + nM : nM;
        nD = nD < 10 ? '0' + nD : nD;
        nH = nH < 10 ? '0' + nH : nH;
        nMi = nMi < 10 ? '0' + nMi : nMi;
        nS = nS < 10 ? '0' + nS : nS;

        var fullTime = nY + '-' + nM + '-' + nD + ' ' + nH + ':' + nMi + ':' + nS;
        $('#nowTime').text(fullTime);
    }

    setInterval(getTime, 1000);
    
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
            $('.page .side li').removeClass('active')
            $('.page .side li a').each(function() {
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