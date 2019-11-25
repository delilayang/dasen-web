$(function(){
	var h=$(window).height();
	var w=$(window).width();

	$(".back").css("height",h+"px");
	$(".nag").css("top",$(window).scrollTop() + 250 +"px");
	$(".nav_box").css("bottom",0);
	
	var yueAnimate={
		lbyFun:function(){
			$(".no1 .nav .a11").css({"left":-35});
			$(".no1 .nav .a22").css({"right":-45});
			$(".no1 .nav .a33").css({"top":300});
			$(".no1 .nav .a11").animate({"left":35},1000,"easeInBack");
			$(".no1 .nav .a22").animate({"right":45},1000,"easeInBack");
			$(".no1 .nav .a33").animate({"top":377},1000,"easeInBack");
		},
		btntop :function(){

			$("#btntop").css({"margin-top": "0px"});
			$("#btntop").animate({
				"margin-top": "30px"
			},1000,'easeOutBounce');
			
		},
		yue :function(id,left,right,time){
			$(id).animate({
				"margin-left": right
			},time,function(){
				$(id).animate({
					"margin-left": left
				},time);
			});
		},
		hjFun:function(){
			
		},
		yuFun:function(){
			$(".no2 .inner .img").css({"width":290,"height":181});
			$(".no2 .inner .img").animate({"width":305,"height":191},1000,"easeInBack");
		},
		n5imgFun:function(){
			// $(".no3 .inner .img").css({"opacity":0});
			// $(".no3 .inner .img").animate({"opacity":1},1000,"easeInBack");

			$(".no3 .inner .img").css({"width": "200px","height": "200px","opacity":"0"});
			
			var y=460;

			$(".no3 .inner .img").animate({
				"opacity": 0.6
			},800,'easeInCubic',function(){
				$(".no3 .inner .img").animate({
					"opacity": 1,
					"width":"216px",
					"height":"216px",
				},400,'easeInCubic');
			});
		
		},
		n5imgFun2:function(){
			$(".no4 .inner .img").css({"width":290,"height":181});
			$(".no4 .inner .img").animate({"width":305,"height":191},1000,"easeInBack");
		},
		n5imgFun3:function(){
			$(".no5 .inner .img").css({"opacity":0.2});
			$(".no5 .inner .img").animate({"opacity":1},1000,"easeInBack");
		}

	}
	
	//鼠标滚动事件 
	var shubiao=true;
	var wheel = function(event) {  
		var delta = 0;  
		if (!event)
			event = window.event;  
		if (event.wheelDelta) {
			delta = event.wheelDelta / 120;
		} else if (event.detail) {
			delta = -event.detail / 3;
		}
		if (delta) handle(delta);
		if (event.preventDefault) event.preventDefault();  
		event.returnValue = false;  
	}
	if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
	document.onmousewheel = wheel;
	var $f=true;
	var handle = function(delta) {
		if(!shubiao) return;
		shubiao=false;
		var random_num = Math.floor((Math.random() * 100) + 50);
		if (delta < 0) {
			PicWheelScroll(1);
			$f=false;
			 //console.log("鼠标滑轮向下滚动：" + delta + "次！"); // 1  
			return false;  
		} else {
			$f=true;
			PicWheelScroll(0);
			//console.log("鼠标滑轮向上滚动：" + delta + "次！"); // -1  
			return false;  
		}
	}
	$(".ac").each(function(i){
		$(this).click(function(){
			$(".ac").removeClass("active");
			$(".ac").eq(i).addClass("active");
			var num=i+1;
			if(num=="5") $("#btntop").hide();
			else $("#btntop").show();
			gotoAnchor($(".a"+num));
			getAnchroFun(num);
		})
	})
	var PicWheelScroll = function(n){
		
		var num=$("#pic1").attr("num");
		
		if((num===5&&n===1) || (num===1&&n===0)) return;
		if(n==1){
			if(num<5) num++;
		}else{
			if(num>1) num--;
		}

		$(".ac").removeClass("active");
		$(".ac").eq(num-1).addClass("active");

		if(num=="5") $("#btntop").hide();
		else $("#btntop").show();
		gotoAnchor($(".a"+num));
		getAnchroFun(num);
	}

	setInterval(yueAnimate.btntop,2000);
	var getAnchroFun=function(num){
		var h=$(window).height();
		var h=(h-700<30?30:h-780)+"px";
		$(".divtop").css("bottom","10px");
		var n=$("#pic1").attr("num");
		switch(parseInt(num)){
			case 1:
				if(n==1&&$f) return false;
				yueAnimate.lbyFun();
				break;
			case 2:
				yueAnimate.yuFun();
				break;
			case 3:
				yueAnimate.n5imgFun();
				break;
			case 4:
				yueAnimate.n5imgFun2();
				break;
			case 5:
				yueAnimate.n5imgFun3();
				break;
		}
		$("#pic1").attr("num",num);
	}
	var gotoAnchor = function(selector,isauto){
		var anchor = $(selector);
		if (anchor.length < 0) return;
		var $win=$(window);
		var $body = $(window.document.documentElement);
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf("webkit") > -1) {
			$body = $(window.document.body)
		}
		var pos=anchor.offset();
		if (isauto) {
			var t = pos.top - $win.scrollTop(); //相对于屏幕显示区
			var t2 = $win.height() - t;
			if (t2 < anchor.outerHeight()) {
				$body.animate({"scrollTop": pos.top}, "normal");
			}
			return;
		}
		$body.animate({"scrollTop": pos.top},{queue :false,complete: function(){shubiao=true;}});
	}
	gotoAnchor($(".a1"));
	yueAnimate.lbyFun();
	$(window).resize(function(){
		var h=$(window).height();
		$(".back").css("height",h+"px");
		var n=$("#pic1").attr("num");
		var h1=(h-700<30?30:h-780)+"px";
		//if(n==1) $(".divtop").css("bottom",h1);
		//else 
		$(".divtop").css("bottom","10px");
		//$(".nav_box").css("bottom","0px");
		$(".no1").css("bottom","0px");
		gotoAnchor($(".a"+n));
	});
	$(".divtop").click(function(){
		var n=$("#pic1").attr("num");
		if(n=="4") $("#btntop").hide();
		n=parseInt(n)+1;
		if(n==6) {return;}
		$(".ac").removeClass("active");
		$(".ac").eq(n-1).addClass("active");
		gotoAnchor($(".a"+n));
		getAnchroFun(n);
		$("#pic1").attr("num",n);
	})


});