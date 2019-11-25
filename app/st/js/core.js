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
    var ndate = years + "-" + month + "-" + days + " " + hours + ":" + minutes + ":" + seconds + " " + "&nbsp" + "营业时间：7X24小时 / 全年无休";
    var divT = document.getElementById("logInfo");
    divT.innerHTML = ndate;
}

function add_zero(temp) {
    if (temp < 10) return "0" + temp;
    else return temp;
}
setInterval("getCurDate()", 100);

$(function() {

    //index lb
    if ($("#lb_box").length) {
        var unslider = $("#lb_box").unslider({
            speed: 500,
            delay: 3500,
            keys: true,
            dots: true,
            fluid: false
        })
    }

    //float
    $("#float").Float();

    $('#float .close a').click(function() {
        $("#float").hide();
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
                    $("#noticeDom").html('<marquee scrollamount="4" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到盛通彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化

})