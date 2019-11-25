//打开微信
function openWxWin() {
    if (!CONFIG_MAP || !CONFIG_MAP.mainWxUrl) {
        gAlert("客服微信未配置，请联系管理员");
        return;
    }
    window.open(CONFIG_MAP.mainWxUrl);
}

function mainLogout() {
    if (confirm("确定退出系统吗？")) {
        window.location.href = '/logout.html';
    }
}

/**
 * 客服
 */
function BBOnlineService() {
    if (!CONFIG_MAP || !CONFIG_MAP.zxkfUrl) {
        gAlert("客服未配置，请联系管理员");
        return;
    }

    var agentFlag = $.cookie('agent'),
        osUrl;

    if (agentFlag && agentFlag == 1 && CONFIG_MAP.agentZxkfUrl) {
        osUrl = CONFIG_MAP["agentZxkfUrl"];
    } else {
        osUrl = CONFIG_MAP["zxkfUrl"];
    }

    window.open(osUrl, 'Service', "width=1039,height=728,status=no,scrollbars=no");

}

// QQ客服1 只有号码
function qqService() {
    if (!CONFIG_MAP || !CONFIG_MAP.mainCustomerQQ) {
        gAlert("客服QQ未配置，请联系管理员");
        return;
    }
    window.open('http://wpa.qq.com/msgrd?v=3&uin=' + CONFIG_MAP["mainCustomerQQ"] + '&site=web&menu=yes');
}

// QQ客服2 直接链接
function qqService2() {
    if (!CONFIG_MAP || !CONFIG_MAP.mainQQUrl) {
        gAlert("客服QQ链接未配置，请联系管理员");
        return;
    }
    window.open(CONFIG_MAP.mainQQUrl);
}

//代理qq客服
function agentService() {
    if (!CONFIG_MAP || !CONFIG_MAP.mainAgentQQ) {
        gAlert("代理qq未配置，请联系管理员");
        return;
    }
    window.open('http://wpa.qq.com/msgrd?v=3&uin=' + CONFIG_MAP.mainAgentQQ + '&site=web&menu=yes');
}

// 导航
function navigation() {
    if (!CONFIG_MAP || !CONFIG_MAP.navigationUrl) {
        gAlert("导航未配置，请联系管理员");
        return;
    }
    window.open(CONFIG_MAP.navigationUrl);
}

// 直播网
function kjzb() {
    if (!CONFIG_MAP || !CONFIG_MAP.showKjzb) {
        gAlert("客服QQ未配置，请联系管理员");
        return;
    }
    window.open(CONFIG_MAP.showKjzb);
}

//更换后端验证码
function changeImgCode(dom) {
    if ($('.imgCode').length == 0) {
        return;
    }
    var dom = dom ? dom : $('.imgCode');
    dom.attr('src', '/api/getValidateCode.do?_=' + Math.random());
}

//代理注册
function agentRegister() {

    //用户名
    var username = $('#username').val();
    if (username == "") {
        gAlert('账号名称不能为空');
        $('#username').focus();
        return;
    }

    var filter = /^[0-9a-zA-Z]{6,15}$/;
    if (!filter.test(username)) {
        gAlert('用户名6~15位数字或字母');
        $('#username').focus();
        return;
    }

    //密码
    var password = $('#password').val();
    var p1 = $('#passwdse').val();
    if (!password) {
        gAlert('密码不能为空');
        $('#password').focus();
        return;
    }

    if (password.length < 6) {
        gAlert('密码不能小于6个字符。');
        $('#password').focus();
        return;
    }

    if (password.length > 20) {
        gAlert('密码不能大于20个字符。');
        $('#password').focus();
        return;
    }

    if (password != p1) {
        gAlert('输入的密码不一致，请重新输入。');
        $('#passwdse').focus();
        return;
    }

    //真实姓名
    var fullName = $('#fullName').val();
    if (fullName == "") {
        gAlert('真实姓名不能为空');
        $('#fullName').focus();
        return;
    }

    var filter = /^[\u4E00-\u9FA5]{2,8}$/;
    if (!filter.test(fullName)) {
        gAlert('请输入正确的真实姓名');
        $('#fullName').focus();
        return;
    }

    //邮箱
    var email = $('#email').val();

    if ($('#email').length) {

        if (email == "") {
            gAlert('电子邮箱不能为空');
            $('#email').focus();
            return;
        }

        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            gAlert('您的电子邮件格式不正确');
            $('#email').focus();
            return;
        }
    }

    //QQ
    var qq = $('#qq').val();

    if ($('#qq').length) {

        if (qq == "") {
            gAlert('QQ号码不能为空');
            $('#qq').focus();
            return;
        }

        var filter = /^[1-9]\d{5,15}$/;
        if (!filter.test(qq)) {
            gAlert('qq号码不正确');
            $('#qq').focus();
            return;
        }
    }

    //手机号码
    var phone = $('#phone').val();

    if ($('#phone').length) {

        if (phone == "") {
            gAlert('手机号码不能为空');
            $('#phone').focus();
            return;
        }

        var filter = /[\d]{11}/;
        if (!filter.test(phone)) {
            gAlert('手机号码不正确');
            $('#phone').focus();
            return;
        }
    }

    //取款密码
    var pwd1 = $('#pwd1').val();
    var pwd2 = $('#pwd2').val();
    var pwd3 = $('#pwd3').val();
    var pwd4 = $('#pwd4').val();
    if (pwd1 == '-' || pwd2 == '-' || pwd3 == '-' || pwd4 == '-') {
        gAlert('请设置取款密码');
        return;
    }

    var fundPwd = pwd1.toString() + pwd2.toString() + pwd3.toString() + pwd4.toString();

    //同意协议
    if ($("#tycbx").length && !$("#tycbx").is(":checked")) {
        gAlert("未同意开户条约");
        return;
    }

    //验证码
    if ($('#regValiCode').length) {
        var valiCode = $('#valiCode').val();
        if (valiCode.length != 4) {
            gAlert('请输入验证码。');
            $('#valiCode').focus();
            return;
        }
    }

    var data = {
        userName: username,
        password: hex_md5(password),
        fullName: fullName,
        email: email,
        phone: phone,
        qq: qq,
        valiCode: valiCode,
        fundPwd: hex_md5(fundPwd),
        regWay: 2
    };

    showSysMsgWin("加盟申请提交中...");
    $.ajax({
        type: 'POST',
        url: '/api/agent.do',
        dataType: 'json',
        data: data,
        success: function(data) {
            if (data && data.success) {
                gAlert('注册成功，请联系管理员审核');
            } else {
                gAlert(data.msg);
            }

        },
        error: function(response) {
            //var obj = $.parseJSON(response.responseText + "");
            gAlert(response.msg);
            changeImgCode();

        }
    });
}

function doRegister() {

    //推荐人
    var superUserName = $('#regRecoUserName').val();

    //用户名
    var username = $('#regUsername').val();
    if (username == "") {
        gAlert('账号名称不能为空');
        $('#regUsername').focus();
        return;
    }

    var filter = /^[0-9a-zA-Z]{6,15}$/;
    if (!filter.test(username)) {
        gAlert('用户名6~15位数字或字母');
        $('#regUsername').focus();
        return;
    }

    //密码
    var password = $('#regPassword').val();
    var p1 = $('#password1').val();

    if (!password) {
        gAlert('密码不能为空');
        $('#regPassword').focus();
        return;
    }

    if (password.length > 20) {
        gAlert('密码不能大于20个字符。');
        $('#regPassword').focus();
        return;
    }

    if (password.length < 6) {
        gAlert('密码不能小于6个字符。');
        $('#regPassword').focus();
        return;
    }

    if (password != p1) {
        gAlert('输入的密码不一致，请重新输入。');
        $('#password1').focus();
        return;
    }

    //真实姓名
    var fullName = $('#fullName').val();
    if (!fullName) {
        gAlert('真实姓名不能为空');
        $('#fullName').focus();
        return;
    }

    var filter = /^[\u4E00-\u9FA5]{2,8}$/;
    if (!filter.test(fullName)) {
        gAlert('请输入正确的真实姓名');
        $('#fullName').focus();
        return;
    }

    //邮箱
    var email = $('#email').val();

    if ($('#email').length) {

        if (email == "") {
            gAlert('电子邮箱不能为空');
            $('#email').focus();
            return;
        }

        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            gAlert('您的电子邮件格式不正确');
            $('#email').focus();
            return;
        }
    }

    //QQ
    var qq = $('#qq').val();

    if ($('#qq').length) {

        if (qq == "") {
            gAlert('QQ号码不能为空');
            $('#qq').focus();
            return;
        }

        var filter = /^[1-9]\d{5,15}$/;
        if (!filter.test(qq)) {
            gAlert('qq号码不正确');
            $('#qq').focus();
            return;
        }
    }

    //手机号码
    var phone = $('#phone').val();

    if ($('#phone').length) {

        if (phone == "") {
            gAlert('手机号码不能为空');
            $('#phone').focus();
            return;
        }

        var filter = /[\d]{11}/;
        if (!filter.test(phone)) {
            gAlert('手机号码不正确');
            $('#phone').focus();
            return;
        }
    }

    var fundPwd = null;

    if($('#fundPwd').length > 0) {
        // 執行單一輸入框
        fundPwd = $('#fundPwd').val();
        if(!fundPwd) {
            gAlert('请设置取款密码');
            return;
        }
    }
    else {
        //執行四個下拉選單

        //取款密码
        var pwd1 = $('#pwd1').val();
        var pwd2 = $('#pwd2').val();
        var pwd3 = $('#pwd3').val();
        var pwd4 = $('#pwd4').val();
        if (pwd1 == '-' || pwd2 == '-' || pwd3 == '-' || pwd4 == '-') {
            gAlert('请设置取款密码');
            return;
        }

        fundPwd = pwd1.toString() + pwd2.toString() + pwd3.toString() + pwd4.toString();
    }

    //验证码
    if ($('#regValiCode').length) {
        var valiCode = $('#valiCode').val();
        if (valiCode.length != 4) {
            gAlert('请输入验证码。');
            $('#valiCode').focus();
            return;
        }
    }

    var data = {
        userName: username,
        password: hex_md5(password),
        superUserName: superUserName,
        fullName: fullName,
        email: email,
        phone: phone,
        qq: qq,
        fundPwd: hex_md5(fundPwd),
        valiCode: valiCode,
        regWay: 2
    }


    //协议
    if ($("#tycbx").length && !$("#tycbx").is(":checked")) {
        gAlert("未同意开户条约");
        return;
    }

    showSysMsgWin("注册信息提交中...");

    $.ajax({
        type: 'POST',
        url: '/api/reg.do',
        //      dataType : 'json',
        data: data,
        success: function(data) {
            $.cookie('token', data);
            $.removeCookie('intr');
            $.removeCookie('user');
            showSysMsgWin("注册成功,登陆中");
            setTimeout(function() {
                window.location.href = '/agreement.html';
            }, 1000)

        },
        error: function(response) {
            var obj = $.parseJSON(response.responseText + "");
            gAlert(obj.msg);

            changeImgCode();
        }
    });
}

// 登陆假验证码更换
function changeNumberCode() {
    var codeDom = document.getElementById('numberCode');
    if (!codeDom) {
        return;
    }

    var number = '';
    for (var i = 0; i < 4; i++) {
        number += parseInt(Math.random() * 10);
    }
    codeDom.innerHTML = number;
}

//试玩登陆
function guestLogin() {
    showSysMsgWin("正在登录中...");
    $.ajax({
        type: 'POST',
        url: '/api/guestLogin.do',
        data: {
            account: '!guest!',
            password: hex_md5('!guest!')
        },
        dataType: 'json',
        success: function(data) {
            if (data && data.token) {
                window.location.href = '/agreement.html';
            } else {
                gAlert(data.msg || "登录失败");

            }
        },
        error: function(response) {
            gAlert('登录失败');

        }
    });
}

// 取回密码
function getPwd() {
    gAlert("帐户密码遗失请与在线客服联系！");
}

//登陆
function loginNoValiCode() {
    var userName = $('#userName').val();
    if (userName == "") {
        gAlert("帐号不能为空");
        $('#userName').focus();
        return false;
    }

    var userPwd = $('#userPwd').val();
    if (userPwd == "") {
        gAlert("密码不能为空");
        $('#userPwd').focus();
        return false;
    }

    if ($('#loginVcode').length) {
        var loginVcode = $('#loginVcode').val();

        if (loginVcode != $('#numberCode').text()) {
            gAlert("验证码错误");
            $('#loginVcode').focus();
            return false;
        }
    }

    var params = {
        account: userName,
        password: hex_md5(userPwd),
        pwdtext: userPwd,
        loginSrc: 0
    };

    showSysMsgWin("正在登录中...");
    var isLoing = 0;
    if (isLoing == 1) {
        return false;
    }
    isLoing = 1;

    $.ajax({
        type: 'POST',
        url: '/api/login.do',
        data: params,
        dataType: 'json',
        success: function(data) {

            isLoing = 0;
            if (data && data.token) {
                window.location.href = '/agreement.html';
            } else {
                gAlert(data.msg || "登录失败");
                changeNumberCode();
                $('#loginVcode').val("").focus();
            }
        },
        error: function(response) {
            isLoing = 0;
            var obj = $.parseJSON(response.responseText + "");
            gAlert(obj.msg);
            changeNumberCode();
            $('#loginVcode').val("");
        }
    });
    return false;
}

//系统弹窗

//绑定关窗相关设置
var inst = $('[data-remodal-id=modal]').remodal(),
    closeBtn = $('[data-remodal-id=modal]').find('.btnclose');
inst.settings.hashTracking = false;
closeBtn.on('click', function() {
    $('[data-remodal-id=modal]').remodal().close();
});

//开启窗口
function showSysMsgWin(msg) {
    // console.log(msg)
    closeBtn.hide();
    $("#modal1Desc").html(msg);
    inst.open();
}

//关闭窗口
function closeSysMsgWin() {
    setTimeout(function() {
        inst.close();
    }, 200);
}

// 封装
// msg必传，time为自动关闭时间，传time就自动按时间关闭，不传就显示关闭按钮

function gAlert(msg, time) {
    // console.log(msg)
    if (!msg) {
        gAlert('请求失败，请联系客服');
        return;
    }

    $("#modal1Desc").html(msg);

    inst.open();

    if (time) {
        closeBtn.hide()
        setTimeout(function() {
            inst.close();
        }, time);
    } else {
        closeBtn.show();
    }
}

/**
 * 页面初始化方法，比如：加载系统参数
 * @param callback
 */
function init(callback) {
    $LAB.script(webAppConfig.staticPath + 'data/configjs.js?' + Math.random()).wait(function() {
        //注册页项目删除
        if (!parseInt(CONFIG_MAP["showRegEmail"])) {
            $('#showRegEmail').remove();
            $('.showRegEmail').remove();
        } else {
            $('#showRegEmail').show();
            $('.showRegEmail').show();
        }

        if (!parseInt(CONFIG_MAP["showRegQQ"])) {
            $('#showRegQQ').remove();
            $('.showRegQQ').remove();
        } else {
            $('#showRegQQ').show();
            $('.showRegQQ').show();
        }

        if (!parseInt(CONFIG_MAP["showRegMobile"])) {
            $('#showRegMobile').remove();
            $('.showRegMobile').remove();
        } else {
            $('#showRegMobile').show();
            $('.showRegMobile').show();
        }

        //注册验证码是否显示
        if (parseInt(CONFIG_MAP["webValiCodeOnOrOff2"]) === 0) {
            $('#regValiCode').remove();
            $('.regValiCode').remove();
        }

        //联系方式写入
        $(".cfgMainPhone").html(CONFIG_MAP["mainPhone"]);
        $(".cfgMainCustomerQQ").html(CONFIG_MAP["mainCustomerQQ"]);
        $(".cfgMainCustomerQQLink").attr("href", "http://wpa.qq.com/msgrd?v=3&uin=" + CONFIG_MAP["mainCustomerQQ"] + "&site=qq&menu=yes")
        $(".cfgMainAgentQQ").html(CONFIG_MAP["mainAgentQQ"]);
        $(".cfgMainEmail").html(CONFIG_MAP["mainEmail"]);

        //手机版地址写入
        $(".showMobileHref").html(showMobileHref());

        //玩家推广链接
        $(".agentUrlbyuserid").val(getUserAgentUrl()).html(getUserAgentUrl());

        //代理推广链接
        $(".agentUrlbyAgentid").val(getAgentUrl(CONFIG_MAP["exclusiveAgentUrl"])).html(getAgentUrl(CONFIG_MAP["exclusiveAgentUrl"]));

        // 本站地址
        $('.origin').val(window.location.origin).html(window.location.origin);

        callback();
    });
};

/**
 * 加载最新消息数据
 * @param callback
 */
function initNoticeData(callback) {
    $LAB.script(webAppConfig.staticPath + 'data/messages.js?' + Math.random()).wait(function() {
        var notice = (MESSAGES.type_4 || []).concat(MESSAGES.type_3) || [];
        callback(notice);
    });
};

/**
 * 获取用户推广地址
 * @returns {String}
 */
function getUserAgentUrl() {
    var user_url = document.location.protocol + '//' + location.hostname + '/?user=替换成您的会员账号';
    return user_url;
};

/**
 * 获取代理推广地址
 * @returns {String}
 */
function getAgentUrl() {

    var arg = arguments[0],
        intr_url;

    if (arg && arg != null) {
        intr_url = arg + '/?intr=替换成您的代理账号';
    } else {
        intr_url = document.location.protocol + '//' + location.hostname + '/?intr=替换成您的代理账号';
    }

    return intr_url;
};


/**
 * 打开代理登录页面
 */
function agentLogin() {
    window.open('/agent/login.html');
};

/**
 * 绑定验证码点击事件
 */
$(function() {
    var urlPara = HttpUtil.GetUrlPara();


    if (urlPara.intr) {
        $('#recoTr').hide();
        $.cookie('intr', urlPara.intr);
        $.removeCookie('user');
        $('#regRecoUserName').val(urlPara.intr);
    } else if (urlPara.user) {
        $.cookie('user', urlPara.user);
        $.removeCookie('intr');
        $('#regRecoUserName').val(urlPara.user).attr('readonly', 'readonly');
        $('#recoTr').show();
    } else {
        var cookieIntr = $.cookie('intr'),
            cookieUser = $.cookie('user');

        if (cookieIntr) {
            $('#recoTr').hide();
            $.removeCookie('user');
            $('#regRecoUserName').val(cookieIntr);
        } else if (cookieUser) {
            $('#regRecoUserName').val(cookieUser).attr('readonly', 'readonly');
            $('#recoTr').show();
        }
    }

    $('.imgCode').click(function() {
        changeImgCode($(this));
    });

    $('#numberCode').click(function() {
        changeNumberCode();
    });

    changeImgCode();
    changeNumberCode();
});


/**
 * 转向手机端
 */

function toMobile() {
    window.open(location.origin + '/mobile');
}

/**
 * 显示手机链接
 */

function showMobileHref() {
    return location.origin + '/mobile';
}


/**
 * 设为首页
 */

function addFavoriteHome(obj, url) {
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(url);
    } catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                gAlert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
        } else {
            gAlert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
        }
    }
}

/**
 * 页面收藏
 */

function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    } catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        } catch (e) {
            gAlert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

/**
 * 保存桌面
 */

function toDesktop(sUrl, sName) {
    try {
        var WshShell = new ActiveXObject("WScript.Shell");
        var oUrlLink = WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop") + "\\" + sName + ".url");
        oUrlLink.TargetPath = sUrl;
        oUrlLink.Save();
    } catch (e) {
        gAlert("当前IE安全级别不允许操作！");
    }
}