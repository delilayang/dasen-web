$(function() {
	init();
    // $('#imgCode').click(function() {
    //     changeImgCode();
    // });

    // document.onkeydown = function(e) {
    //     var theEvent = window.event || e;
    //     var code = theEvent.keyCode || theEvent.which;
    //     if (code == 13) {
    //         $("#regBtn").click();
    //     }
    // }

    // changeImgCode();

    // var urlPara = HttpUtil.GetUrlPara();
    // if (urlPara.intr) {
    //     $.cookie('intr', urlPara.intr);
    // }
})

// function changeImgCode() {
//     $('#imgCode').attr('src', '/api/getValidateCode.do?_=' + Math.random());
// }

// function doRegister() {
//     var userName = $('#userName').val();
//     if (userName == '') {
//         alert('账号名称不能为空');
//         return;
//     }
//     if (userName.length < 6 || userName.length > 15) {
//         alert('账号名称由6-15个数字字符组成。');
//         return;
//     }
//     var password = $('#password').val();
//     var p1 = $('#password1').val();
//     if (password == '') {
//         alert('密码不能为空');
//         return;
//     }
//     if (password.length < 6) {
//         alert('密码不能小于6位字符。');
//         return;
//     }
//     if (password != p1) {
//         alert('输入的密码不一致，请重新输入。');
//         return;
//     }

//     var email = $('#email').val();
//     if (email == '') {
//         alert('电子邮箱不能为空');
//         return;
//     }

//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if (!filter.test(email)) {
//         alert('您的电子邮件格式不正确');
//         return;
//     }

//     var fullName = $('#fullName').val();
//     if (fullName == '') {
//         alert('真实姓名不能为空');
//         return;
//     }

//     var pwd1 = $('#pwd1').val();
//     var pwd2 = $('#pwd2').val();
//     var pwd3 = $('#pwd3').val();
//     var pwd4 = $('#pwd4').val();
//     if (pwd1 == 0 && pwd2 == 0 && pwd3 == 0 && pwd4 == 0) {
//         alert('请设置取款密码');
//         return;
//     }

//     var fundPwd = pwd1.toString() + pwd2.toString() + pwd3.toString() + pwd4.toString();

//     var valiCode = $('#valiCode').val();
//     if (valiCode == '') {
//         alert('请输入验证码。');
//         return;
//     }

//     var superUserName = $.cookie("intr");

//     $.ajax({
//         type: 'POST',
//         url: '/api/reg.do',
//         data: {
//             userName: userName,
//             password: hex_md5(password),
//             superUserName: superUserName,
//             fullName: fullName,
//             email: email,
//             fundPwd: hex_md5(fundPwd),
//             valiCode: valiCode,
//             regWay: 2
//         },
//         dataType: 'json',
//         success: function() {
//             alert('注册成功');
//             window.location.href = 'agreement.html';
//         },
//         error: function(response) {
//             var obj = response.responseJSON;
//             alert(obj.msg);
//             changeImgCode();
//         }
//     });
// }
