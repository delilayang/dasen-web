$(document).ready(function() {
    //gamebox
    function carouselFn1(obj, stopTime, slipTime) {
        var stopTime = stopTime ? stopTime : 2000;
        var slipTime = slipTime ? slipTime : 400;
        var obj = $(obj);
        var tutu = obj.find('.tutu')
        var yuandian = obj.find('.yuandian')

        var len = tutu.children('li').width();
        var cLength = tutu.children('li').length + 1;
        tutu.append(tutu.children('li').clone(true));
        var iNow = 0;
        for (var i = 0; i < cLength - 1; i++) {
            yuandian.append('<span></span>')
        }
        yuandian.children().eq(0).addClass('cur')
        var leftBtn = function() {
            if (iNow > 0) {
                iNow--;
                tutu.stop().animate({ left: -len * iNow }, slipTime);
                yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
            } else {
                tutu.css({ left: -len * (cLength - 1) })
                iNow = cLength - 2;
                tutu.stop().animate({ left: -len * iNow }, slipTime);
                yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
            }
        }
        var rightBtn = function() {
            if (iNow < cLength - 2) {
                iNow++;
                tutu.stop().animate({ left: -len * iNow }, slipTime);
                yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
            } else {
                tutu.stop().animate({ left: -len * (cLength - 1) }, slipTime, function() {
                    tutu.css({ left: 0 });
                    iNow = 0;
                });
                yuandian.children('span').eq(0).addClass('cur').siblings().removeClass('cur');
            }
        }
        var times = window.setInterval(function() {
            rightBtn();
        }, stopTime)
        obj.hover(function() {
            window.clearInterval(times);
        }, function() {
            times = window.setInterval(function() {
                rightBtn();
            }, stopTime)
        })
        obj.find('.tulleft').click(function() {
            leftBtn();
        })
        obj.find('.tulright').click(function() {
            rightBtn();
        })
        yuandian.children('span').click(function() {
            iNow = $(this).index();
            $(this).addClass('cur').siblings().removeClass('cur');
            tutu.stop().animate({ left: -len * iNow }, slipTime);
            yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
        })
    }
    carouselFn1('.zuolunbx', 2000)

    //lb
    function huxiFn(id) {
        var iNowxx = 0;
        var timexx = null;
        var outTime = 800;
        var inTime = 600;
        var stopTime = 4000;
        var yuandian = $(id).find(".yuandian")
        var tutu = $(id).find('ul.tutu')
        var len2 = tutu.children('li').length;
        /*  for(var i=0; i<len2;i++){
             yuandian.append('<span></span>')
         } */
        yuandian.children().eq(0).addClass('cur')
        var rightbtn = function() {
            if (iNowxx < len2 - 1) {
                tutu.children('li').eq(iNowxx).stop().fadeOut(outTime);
                iNowxx++;
                yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
                tutu.children('li').eq(iNowxx).stop().fadeIn(inTime);
            } else {
                tutu.children('li').eq(iNowxx).stop().fadeOut(outTime);
                iNowxx = 0;
                tutu.children('li').eq(iNowxx).stop().fadeIn(inTime);
                yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
            }
        }
        var leftbtn = function() {
            if (iNowxx > 0) {
                tutu.children('li').eq(iNowxx).stop().fadeOut(outTime);
                iNowxx--;
                yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
                tutu.children('li').eq(iNowxx).stop().fadeIn(inTime);
            } else {
                tutu.children('li').eq(iNowxx).stop().fadeOut(outTime);
                iNowxx = len2 - 1;
                tutu.children('li').eq(iNowxx).stop().fadeIn(inTime);
                yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
            }
        }
        timexx = window.setInterval(function() {
            rightbtn();
        }, stopTime)
        /*  $(id).hover(function(){
             window.clearInterval(timexx);
         },function(){
             timexx = window.setInterval(function(){
                 rightbtn();
             },stopTime)
         }) */
        yuandian.children().click(function() {
            tutu.children('li').eq(iNowxx).fadeOut(outTime);
            iNowxx = $(this).index()
            yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
            tutu.children('li').eq(iNowxx).fadeIn(inTime);
        })
    }
    huxiFn('.lunbo')
    $(".banner").huxiFn({
        stopTime: 5000
    })


    //radio turnning
    function carouselTopFn(obj, stopTime, slipTime) {
        var stopTime = stopTime ? stopTime : 2000;
        var slipTime = slipTime ? slipTime : 800;
        var obj = $(obj);
        var tutu = obj.find('ul')
        var yuandian = obj.find('.yuandian')
        tutu.append(tutu.children('li').eq(0).clone(true));
        var len = tutu.children('li').height();
        var cLength = tutu.children('li').length;
        var iNow = 0;
        for (var i = 0; i < cLength - 1; i++) {
            yuandian.append('<span></span>')
        }
        yuandian.children().eq(0).addClass('cur')
        var leftBtn = function() {
            if (iNow > 0) {
                iNow--;
                tutu.stop().animate({ top: -len * iNow }, slipTime);
                yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
            } else {
                tutu.css({ top: -len * (cLength - 1) })
                iNow = cLength - 2;
                tutu.stop().animate({ top: -len * iNow }, slipTime);
                yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
            }
        }
        var rightBtn = function() {
            if (iNow < cLength - 2) {
                iNow++;
                tutu.stop().animate({ top: -len * iNow }, slipTime);
                yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
            } else {
                tutu.stop().animate({ top: -len * (cLength - 1) }, slipTime, function() {
                    tutu.css({ top: 0 });
                    iNow = 0;
                });
                yuandian.children('span').eq(0).addClass('cur').siblings().removeClass('cur');
            }
        }
        var times = window.setInterval(function() {
            rightBtn();
        }, stopTime)
        obj.hover(function() {
            window.clearInterval(times);
        }, function() {
            times = window.setInterval(function() {
                rightBtn();
            }, stopTime)
        })
        obj.find('.tpbtnup').click(function() {
            leftBtn();
        })
        obj.find('.tpbtndown').click(function() {
            rightBtn();
        })
        yuandian.children('span').click(function() {
            iNow = $(this).index();
            $(this).addClass('cur').siblings().removeClass('cur');
            tutu.stop().animate({ top: -len * iNow }, slipTime);
            yuandian.children('span').eq(iNow).addClass('cur').siblings().removeClass('cur');
        })
    }

    //layer
    layer.config({
        skin: 'layer-ext-seaning',
        extend: 'skin/seaning/style.css'
    });

    function hezuo() {
        layer.open({
            type: 1,
            title: '<span class="gundong"></span><div class="datlt">关于我们</div><div class="bgmxs"></div>',
            shadeClose: true,
            shade: 0.8,
            area: ['638px', '80%'],
            content: $('#m4')

        });
    }

    function youhui() {
        layer.open({
            type: 1,
            title: '<span class="gundong"></span><div class="datlt">最新优惠</div><div class="bgmxs"></div>',
            shadeClose: true,
            shade: 0.8,
            area: ['638px', '80%'],
            content: $('#m2')
        });
    }

    function answer() {
        layer.open({
            type: 1,
            title: '<span class="gundong"></span><div class="datlt">常见问题</div><div class="bgmxs"></div>',
            shadeClose: true,
            shade: 0.8,
            area: ['638px', '80%'],
            content: $('#m3')

        });
    }

    function about() {
        layer.open({
            type: 1,
            title: '<span class="gundong"></span><div class="datlt">代理加盟</div>',
            shadeClose: true,
            shade: 0.8,
            area: ['638px', '80%'],
            content: $('#m1')

        });
    }

    function setRadio() {
        $(".luntop li").on("click", function() {
            layer.open({
                shade: .5,
                btn: false,
                shadeClose: true,
                title: "系统公告",
                content: $(this).data("content"),
                skin: "bgIndex"
            });
        });
    }

    $(".hezuo").click(function() {
        hezuo()
    })
    $(".youhui").click(function() {
        youhui()
    })
    $(".wenti").click(function() {
        answer()
    })
    $(".about").click(function() {
        about()
    })


   

    function initNotice() {
        if (typeof($LAB) != 'object') {
            setTimeout(initNotice, 2000);
        } else {
            initNoticeData(function(notice) {
                if (notice.length) {

                    var html = '<marquee style="margin-top: 8px;" scrollamount="4" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >';
                    for (var i = 0; i < notice.length; i++) {
                        html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                    }

                    html += '</marquee>';

                    $("#noticeDom").html(html);
                } else {
                    $("#noticeDom").html('<marquee style="margin-top: 8px;" scrollamount="4" scrolldelay="30" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到热购彩票</marquee>');
                }
            });
        }
    };

    setTimeout(initNotice, 500);

    //popup
    $("[layerid]").click(function(){
        var layerid = $(this).attr("layerid");
        layer.open({
          type: 1,
          skin: 'layui-layer-demo', 
          area:[],
          anim: 2,
          title:"",
          closeBtn: 0,
          shadeClose: true, 
          content: $('[data-layer="'+layerid+'"]')
        });
      });

    //swiper
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: '5',
        loop: true,
        speed: 500,
        
        navigation: {
          nextEl: '.rightbtn',
          prevEl: '.leftbtn',
        },
 
      });

    //时间
    function getTime() {
        var nowDate = new Date(new Date().getTime()),
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
        $('#fulltime').text(fullTime);
    }

    setInterval(getTime, 1000); 

});