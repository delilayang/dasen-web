function getCurDate() {
    var d = new Date();
    var week;
    /*switch (d.getDay()){
    case 1: week="星期一"; break;
    case 2: week="星期二"; break;
    case 3: week="星期三"; break;
    case 4: week="星期四"; break;
    case 5: week="星期五"; break;
    case 6: week="星期六"; break;
    default: week="星期天";
    }*/
    var years = d.getFullYear();
    var month = add_zero(d.getMonth() + 1);
    var days = add_zero(d.getDate());
    var hours = add_zero(d.getHours());
    var minutes = add_zero(d.getMinutes());
    var seconds = add_zero(d.getSeconds());
    var ndate = "GMT-04:00 " + years + "-" + month + "-" + days + " " + hours + ":" + minutes + ":" + seconds;
    var divT = document.getElementById("logInfo");
    divT.innerHTML = ndate;
}

function add_zero(temp) {
    if (temp < 10) return "0" + temp;
    else return temp;
}
setInterval("getCurDate()", 100);

$(function() {
    //init
    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee scrollamount="3" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").append(html);
                } else {
                    $("#noticeDom").append('<marquee scrollamount="3" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到彩盛彩票网</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化

     //activity menu
    //  var pics = $('#information'),
    //  $btn = $(this);
 
 
    //  pics.on('click', function() {
    //     $(this).next('.text').slideToggle(200);
    //  })

    $("#information1").on('click' ,function() {
        $(".text1").slideToggle("200");
    });
    $("#information2").on('click' ,function() {
        $(".text2").slideToggle("200");
    });
    $("#information3").on('click' ,function() {
        $(".text3").slideToggle("200");
    });
    $("#information4").on('click' ,function() {
        $(".text4").slideToggle("200");
    });
    $("#information5").on('click' ,function() {
        $(".text5").slideToggle("200");
    });
})