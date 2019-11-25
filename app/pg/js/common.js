function app() {
    layer.open({
        type: 1,
        title: '<span class="gundong"></span>APP下载',
        shadeClose: true,
        shade: 0.8,
        area: ['630px', '85%'],
        content: $('#app')
    });
}

function hezuo() {
    layer.open({
        type: 1,
        title: '<span class="gundong"></span>代理合作',
        shadeClose: true,
        shade: 0.8,
        area: ['630px', '85%'],
        content: $('#m1')
    });
}

function youhui() {
    layer.open({
        type: 1,
        title: '<span class="gundong"></span>最新优惠',
        shadeClose: true,
        shade: 0.8,
        area: ['630px', '85%'],
        content: $('#youhui')
    });
}

function answer() {
    layer.open({
        type: 1,
        title: '<span class="gundong"></span>常见问题',
        shadeClose: true,
        shade: 0.8,
        area: ['630px', '80%'],
        content: $('#m2')
    });
}

function about() {
    layer.open({
        type: 1,
        title: '<span class="gundong"></span>关于我们',
        shadeClose: true,
        shade: 0.8,
        area: ['630px', '80%'],
        content: $('#m3')
    });
}

init(function() {
    if (CONFIG_MAP && CONFIG_MAP.mainAgentQQ) {
        $('#mainAgentQQ').html(CONFIG_MAP.mainAgentQQ);
    }
});

$('#dlUrl').html(getAgentUrl());

if (window.location.href.indexOf("ss267.com") > -1) {
    $.cookie('intr', 'jacky888');
    $.removeCookie('user');
}


// hash position
var hash = window.location.hash;

if (hash == '#app') {
    app();
}
