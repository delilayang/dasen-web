function convertStyle(obj) {
    if (obj.length) {
        for (var i = 0; i < obj.length; i++) {
            obj[i].style.left = '0px';
            obj[i].style.top = '0px';
        }
        for (var i = 0; i < obj.length; i++) {
            obj[i].style.position = 'relative';
            obj[i].style.margin = 0;
        }
    } else {
        obj.style.left = '0px';
        obj.style.top = '0px';
        obj.style.position = 'relative';
        obj.style.margin = 0;
    }
}

function shake(obj) {
    var posData = [1, -1];
    obj.onmousemove = function() {
        var i = 0;
        clearInterval(timer);
        var timer = setInterval(function() {
            i++;
            obj.style.left = posData[0] + ((i % 2) > 0 ? -2 : 2) + 'px';
            obj.style.top = posData[1] + ((i % 2) > 0 ? -2 : 2) + 'px';
            if (i >= 10) {
                clearInterval(timer);
                obj.style.left = posData[0] + 'px';
                obj.style.top = posData[1] + 'px';
            }
        }, 10);
    }
}


window.onload = function() {
    //var oBox1=document.getElementById('bk1');
    //convertStyle(oBox1);
    //shake(oBox1);
    //var oBox2=document.getElementById('bk2');
    //convertStyle(oBox2);
    //shake(oBox2);
    //var oBox3=document.getElementById('bk3');
    //convertStyle(oBox3);
    //shake(oBox3);
    //var oBox4=document.getElementById('bk4');
    //convertStyle(oBox4);
    //shake(oBox4);
    //var oBox5=document.getElementById('bk5');
    //convertStyle(oBox5);
    //shake(oBox5);
    //var oBox6=document.getElementById('bk6');
    //convertStyle(oBox6);
    //shake(oBox6);
}
$(function() {
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
                    $("#noticeDom").html('<marquee scrollamount="4" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到博9彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 2000);

    init(); //初始化

})