/* 
* @Author: lydia
* @Date:   2017-02-04 22:54:51
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-17 21:56:59
*/
function startTime(){
    var today=new Date()
    var years=today.getFullYear();
    var months=today.getMonth();
    var d=today.getDate()
    var h=today.getHours()
    var m=today.getMinutes()
    var s=today.getSeconds()
    // add a zero in front of numbers<10
    months=months+1
    months=checkTime(months)
    d=checkTime(d)
    m=checkTime(m)
    s=checkTime(s)
    var weekday=new Array(7)
    weekday[0]=""
    weekday[1]=""
    weekday[2]=""
    weekday[3]=""
    weekday[4]=""
    weekday[5]=""
    weekday[6]=""
    var w=weekday[today.getDay()]
    document.getElementById('ShowTime').innerHTML=years+"/"+months+"/"+d+" "+w+" "+h+":"+m+":"+s;
    t=setTimeout('startTime()',500);
}
function checkTime(i){
    if (i<10) {
        i="0" + i;
    }
    return i
}

//设为首页
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
    }catch(e){
        if(window.netscape){
            try{
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e){
                alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
        }else{
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
        }
    }
}
 

//收藏本站
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
;$(function(){
   $("#nav li").on('click',function(event) {
        event.preventDefault();
        /* Act on the event */
        console.log("ssss");
        var index =$(this).index();
        $(this).children("a").addClass('on');
        $(this).siblings().children().removeClass('on');
        $(".DNSService").eq(index).css("display","block").siblings('.DNSService').css("display","none");
    }); 
});
