$("#webMenu a").removeClass("cur");

//设置当前页菜单默认值
var curLocation = location.href.split("/");
var curPageName = curLocation.slice(curLocation.length - 1, curLocation.length).toString(String).split(".").slice(0, 1).toString(String).toLowerCase();
var webMenu = $("#webMenu").children();
var lefNavMenu = $("#lefNavMenu").children();

switch (curPageName) {
    case "":
        webMenu.eq(0).addClass("cur");
        break;
    case "index":
        webMenu.eq(0).addClass("cur");
        break;
    case "reg":
        webMenu.eq(1).addClass("cur");
        break;
    case "agent":
        webMenu.eq(5).addClass("cur");
        break;
    case "contactus":
        lefNavMenu.eq(7).children().addClass("cur");
        break;

    case "activity":
        webMenu.eq(7).addClass("cur");
        lefNavMenu.eq(5).children().addClass("cur");
        break;
    case "deposit":
        webMenu.eq(3).addClass("cur");
        lefNavMenu.eq(4).children().addClass("cur");
        break;
    case "faq":
        webMenu.eq(3).addClass("cur");
        lefNavMenu.eq(1).children().addClass("cur");
        break;
    case "about":
        webMenu.eq(5).addClass("cur");
        lefNavMenu.eq(0).children().addClass("cur");
        break;
    case "generalfaq":
        webMenu.eq(3).addClass("cur");
        lefNavMenu.eq(2).children().addClass("cur");
        break;
    case "appdownload":
        webMenu.eq(2).addClass("cur");
        lefNavMenu.eq(0).children().addClass("cur");
        break;
}
