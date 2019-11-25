$(document).ready(function(){
	var curIndex=0;
	var bannerTimerID;
	var homeBanner=$("#homeBanner");
	var bannerObj=homeBanner.children(".banner");
	var bannerLen=bannerObj.length-1;
	var bannerCtrlPrev=homeBanner.children().first().children().first();
	var bannerCtrlNext=homeBanner.children().first().children().last();
	var curBanner=function(curID){ bannerObj.hide().eq(curID).fadeIn(500); }
	var bannerTimer=function(){ curIndex=curIndex>=bannerLen?0:curIndex+1;curBanner(curIndex); }
	var startBan=function(){ bannerTimerTimerID=setInterval(bannerTimer,5000); }
	var stopBan=function(){ clearInterval(bannerTimerTimerID); }
	
	bannerObj.hover(function(){stopBan()},function(){startBan()});
	bannerCtrlPrev.click(function(){ curIndex=curIndex>0?curIndex-1:bannerLen;curBanner(curIndex); });
	bannerCtrlNext.click(function(){ curIndex=curIndex>=bannerLen?0:curIndex+1;curBanner(curIndex); });
	
	if(bannerLen>-1){startBan();}
});