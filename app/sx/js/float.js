lastScrollY = 0;

function heartBeat() {
    if (!document.getElementById("rightkf")) {
        return;
    }
    var a;
    document.documentElement && document.documentElement.scrollTop ? a = document.documentElement.scrollTop : document.body && (a = document.body.scrollTop);
    percent = .1 * (a - lastScrollY);
    percent = 0 < percent ? Math.ceil(percent) : Math.floor(percent);
    document.getElementById("rightkf").style.top = parseInt(document
        .getElementById("rightkf").style.top) + percent + "px";
    lastScrollY += percent
}
window.setInterval("heartBeat()", 30);
$(document).ready(function() {
    var a = $("#rightkf");
    $(".close,.close2").click(function() {
        a.hide()
    });
    $(".fewer").click(function() {
        $(this).parent().children("div").slideUp(800, function() {
            $(".fewer,.close").hide();
            $(".expand,.close2,.ser2").css({
                display: "block"
            })
        })
    });
    $(".expand").click(function() {
        $(".expand,.close2,.ser2").hide();
        $(".fewer,.close").show();
        $(this).parent().children("div").slideDown(500)
    })
});
