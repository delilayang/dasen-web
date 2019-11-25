
// 
$(function() {
    $(".capcha img, #captcha, .captcha img").click(function() {
        $(this).attr("src", "code?_=" + (new Date()).getTime())
    });
    $("input[name=username]").change(function() {
        var b = $(this).val();
        if (b != "") {
            if (b.length < 4) {
                dialog.error("消息", "帐户名由4-10个字符组成！");
                return
            }
            $.get("check", {
                username: $(this).val()
            },
            function(c) {
                if (!c) {
                    $("#nameTips").html("＊该账号可用").css("color", "blue")
                } else {
                    $("#nameTips").html("＊该账号已被注册，不可用").css("color", "red")
                }
            })
        }
    });
    $("#btnRegister").click(function() {
        a()
    });
    function a() {
        var h = $(".clearfix input[name=username]").val() == undefined ? "": $(".clearfix input[name=username]").val().trim();
        if (h == "") {
            dialog.error("消息", "请输入账号名称！");
            return
        }
        var f = $(".clearfix input[name=fullName]").val();
        if (f !== undefined && f == "") {
            dialog.error("消息", "请输入真实姓名！");
            return
        }
        var j = $(".clearfix input[name=email]").val();
        if (j !== undefined && j.trim() == "") {
            dialog.error("消息", "请输入电子邮箱地址！");
            return
        } else {
            if (j !== undefined && !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(j)) {
                dialog.error("消息", "您的电子邮件格式不正确！");
                return
            }
        }
        var e = $("#aff-key").val();
        if (e == "") {
            dialog.error("消息", "请输入邀请码！");
            return
        }
        var b = $(".clearfix input[name=mobile]").val();
        var d = new RegExp("^[0-9]*$");
        if (b !== undefined && (b == "" || !d.test(b))) {
            dialog.error("消息", "请输入正确的11位数字手机号码！");
            return
        }
        var k = $(".clearfix input[name=wechat]").val();
        var i = new RegExp("^[a-zA-Z0-9-_]+$");
        if (k !== undefined && k.trim() == "") {
            dialog.error("消息", "请输入微信号！");
            return
        } else {
            if (k !== undefined && (!i.test(k) || k.length < 4)) {
                dialog.error("消息", "请输入正确的微信号！");
                return
            }
        }
        var l = $(".clearfix input[name=password]").val();
        var m = $(".clearfix input[name=password1]").val();
        if (l == "") {
            dialog.error("消息", "请输入密码！");
            return
        }
        if (l != m) {
            dialog.error("消息", "输入的密码不一致，请重新输入！");
            return
        }
        var c = $("#code").val();
        if (c == "") {
            dialog.error("消息", "请输入验证码！");
            return
        }
        var g = getQueryString("aff");
        if (g == "" || g == null) {
            g = LIBS.cookie("affid")
        }
        $("#btnRegister").attr("disabled", "disabled");
        $("#btnRegister").val("提交中，请等待...");
        
    }
});



