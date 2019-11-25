$(function() {
  //
  $(".navigation li a").each(function(){
    var href = $(this).attr('href');
    if(location.pathname.indexOf(href) >= 0) {
        
      $(this).parent().addClass('active').siblings().removeClass('active');
    }
  });

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


  //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee behavior="scroll" scrollamount="5" scrolldelay="20" loop="-1" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee behavior="scroll" scrollamount="5" scrolldelay="20" loop="-1" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到盛兴</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    $("#float").Float();
    $('#float_close a').click(function() {
        $("#float").hide();
    })

    
    //line animate
    var endData = {
        min: (730000 + Math.floor(Math.random() * 50000)),
        minLeft: -70,
        user: (260000 + Math.floor(Math.random() * 10000)),
        userLeft: -30,
        bet: (4300000 + Math.floor(Math.random() * 230000)),
        betLeft: 0,
        type: 1
    }

    var minDom = $('#min'),
        minLine = $('#minLine'),
        userDom = $('#activeUser'),
        userLine = $('#activeUserLine'),
        betDom = $('#bet'),
        betLine = $('#betLine')

    $(window, document).scroll(function() {
        nowH = $(window).scrollTop();
        if (!endData.type) {
            return;
        }

        if (nowH > 500) {
            userLine.animate({ left: endData.userLeft }, 1200);
            count(userDom, endData.user, 3187);
        }

        if (nowH > 500) {
            betLine.animate({ left: endData.betLeft }, 1200);
            count(betDom, endData.bet, 33187);
        }

        if (nowH > 530) {
            minLine.animate({ left: endData.minLeft }, 1200);
            var nowNum = minDom.text();
            count(minDom, endData.min, 7531);
            endData.type = 0;
        }
    })

    function count(dom, num, plusNum, type) {
        var nowNum = dom.text() * 100,
            type = type ? 100 : 10;

        function run() {
            if (nowNum < num) {
                nowNum = nowNum + plusNum;
                dom.text(Math.floor(nowNum / type));
                setTimeout(run, 10);
            } else {
                return;
            }
        }
        run();
    }

    init(); //初始化
})
