lastScrollY = 0;
function heartBeat() {
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop)
		diffY = document.documentElement.scrollTop;
	else if (document.body)
		diffY = document.body.scrollTop
	else {/* Netscape stuff */
	}

	percent = .1 * (diffY - lastScrollY);
	if (percent > 0)
		percent = Math.ceil(percent);
	else
		percent = Math.floor(percent);
	document.getElementById("rightkf").style.top = parseInt(document.getElementById("rightkf").style.top) + percent + "px";

	lastScrollY = lastScrollY + percent;
}
window.setInterval("heartBeat()", 1);
$(document).ready(function() {
	var rightkf = $("#rightkf");
	rightkf.hover(function() {
		$(this).stop().animate({
			marginRight : 0
		}, 300);
	}, function() {
		$(this).stop().animate({
			marginRight : -208
		}, 300);
	});
});