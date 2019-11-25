// canvas烟雾缭绕效果
var canvasSmoke = function(canvas, options) {
    var defaults = {
        count: 60,
        velocity: 2,
        fps: 30,
        url: 'img/i-car1-smoke.png'
    };

    options = options || {};

    // 参数合并
    var params = {};

    for (var key in defaults) {
        params[key] = options[key] || defaults[key];
    }

    // 创建存储粒子的数组
    var particles = [];

    // 渲染的粒子数目
    var particleCount = params.count;

    // 每个方向的最大速度
    var maxVelocity = params.velocity;

    // 每秒多少帧
    var targetFPS = params.fps;

    // canvas元素
    var eleCanvas = canvas;

    if (!eleCanvas) {
        return this;
    }

    // 画布的尺寸
    var canvasWidth = eleCanvas.clientWidth;
    var canvasHeight = eleCanvas.clientHeight;

    eleCanvas.width = canvasWidth;
    eleCanvas.height = canvasHeight;

    // 创建图片对象
    var imageObj = new Image();

    // 一旦图像被下载，然后在所有的颗粒上设置图像
    imageObj.onload = function() {
        particles.forEach(function(particle) {
            particle.setImage(imageObj);
        });
    };

    // 烟雾图片地址
    imageObj.src = params.url;

    // 粒子实例方法
    function Particle(context) {

        // 设置初始位置
        this.x = 0;
        this.y = 0;

        // 纵横速度
        this.xVelocity = 0;
        this.yVelocity = 0;

        // 圆角大小
        this.radius = 2;

        // 存储上下文，绘制的时候需要
        this.context = context;

        // 绘制粒子的具体方法
        this.draw = function() {
            // 如果图片，则绘制
            if (this.image) {
                this.context.globalAlpha = this.alpha;
                // 烟雾缭绕就看这里了
                // 这是宽度，是动态的
                var fillWidth = canvasWidth / 2,
                    fillHeight = fillWidth - fillWidth * (this.x / canvasWidth * this.y / canvasHeight);

                this.context.drawImage(this.image, 0, 0, this.imageWidth, this.imageHeight, this.x, this.y, fillWidth,
                    fillHeight);
            }
        };

        // 刷新粒子
        this.update = function() {
            // 改变粒子的
            this.x += this.xVelocity;
            this.y += this.yVelocity;

            // 如果到了右边缘
            if (this.x >= canvasWidth) {
                this.xVelocity = -this.xVelocity;
                this.x = canvasWidth;
            }
            // 检测是否到了左边缘
            else if (this.x <= 0) {
                this.xVelocity = -this.xVelocity;
                this.x = 0;
            }

            // 底边缘
            if (this.y >= canvasHeight) {
                this.yVelocity = -this.yVelocity;
                this.y = canvasHeight;
            }

            // 是否上边缘
            else if (this.y <= 0) {
                this.yVelocity = -this.yVelocity;
                this.y = 0;
            }

            // 越靠近边缘，透明度越低
            // 纵向透明度变化要比横向的明显
            this.alpha = (1 - Math.abs(canvasWidth * 0.5 - this.x) / canvasWidth) * (0.7 - Math.abs(canvasHeight *
                0.5 - this.y) / canvasHeight);
        };

        // 设置粒子位置方法
        this.setPosition = function(x, y) {
            this.x = x;
            this.y = y;
        };

        // 设置速度方法
        this.setVelocity = function(x, y) {
            this.xVelocity = x;
            this.yVelocity = y;
        };

        this.setImage = function(image) {
            this.imageWidth = image.width;
            this.imageHeight = image.height;
            this.image = image;
        }
    }

    // 生成一个min,max大小之间的随机数
    function generateRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    // canvas上下文
    var context;

    // 初始化常见
    function init() {
        var canvas = eleCanvas;
        if (canvas.getContext) {

            // 绘图都需要这条语句
            context = canvas.getContext('2d');

            // 创建粒子，并设置他们的位置什么的，当然都是随机的
            for (var i = 0; i < particleCount; ++i) {
                var particle = new Particle(context);

                // 随机位置
                particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight));

                // 设置随机速度
                particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
                particles.push(particle);
            }
        }
    }

    // 初始化
    init();

    // 绘制方法
    function draw() {
        // 清除绘制
        //context.fillStyle = "rgba(0, 0, 0, 0)";
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        // 绘制所有粒子
        particles.forEach(function(particle) {
            particle.draw();
        });
    }

    // 刷新
    function update() {
        particles.forEach(function(particle) {
            particle.update();
        });
    }

    // 开始绘制
    if (context) {
        setInterval(function() {
            // 绘制前先更新位置什么的
            update();

            // 绘制
            draw();
        }, 1000 / targetFPS);
    }
};

// IE9+烟雾效果走起
if ([].map) {
    canvasSmoke(document.querySelector('#smokeCanvas'));
}


function takeAction(btn) {
    $('#' + btn.id).addClass("rubberBand");
    $('#' + btn.id).bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#' + btn.id).removeClass('rubberBand');
    });
}

$(".my_nav li").mouseover(function() {
    $(this).addClass("flash");
    $(this).bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('flash');
    });
});

function countSecond() {
    $(".car1").show();
    $(".car1").addClass("car1_move");
    $(".car1").bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(".car1").removeClass('car1_move');

        $(".car1-smoke").show();
        $(".car1-smoke").addClass("fadeIn");
        $(".car1-smoke").bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(".car1-smoke").removeClass('fadeIn');
        });

        $("#smokeCanvas").css("opacity", "1");

    });

    $(".car2").show();
    $(".car2").addClass("car2_move");
    $(".car2").bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(".car2").removeClass('car2_move');
    });
}

setTimeout("countSecond()", 4 * 1000);

setTimeout("countSecond()", 10 * 1000);

setTimeout("countSecond()", 16 * 1000);

$('#textBtn li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#textBox li').eq($(this).index()).show().siblings().hide();
})

//init
function initNotice() {
    if (typeof($LAB) != 'object') {
        setTimeout(initNotice, 1000);
    } else {
        initNoticeData(function(notice) {
            if (notice.length) {
                var html = '<marquee scrollamount="4" scrolldelay="30" style="color:#fff" onmouseover="this.stop();" onmouseout="this.start();" >';
                for (var i = 0; i < notice.length; i++) {
                    html += notice[i].title + '：&nbsp;&nbsp;&nbsp;&nbsp;' + notice[i].message + '&nbsp;&nbsp;&nbsp;&nbsp;';
                }

                html += '</marquee>';

                $("#noticeDom").html(html);
            } else {
                $("#noticeDom").html('<marquee scrollamount="5" style="color:#fff" style="height:37px;" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();" >欢迎来到国民彩票</marquee>');
            }
        });
    }
};

$(function() {
    setTimeout(initNotice, 2000);
    init(); //初始化
})