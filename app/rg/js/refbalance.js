var cur_widget;
var jsonResult = undefined;

function refreshBalance(widget) {
    if (!checkRefreshOp())
        return;
    cur_widget = $(widget);
    jsonAjax('/GeneralAjax/getbalance.shtml', {},
            success, beforeSend, complete, error
            );
}

function refreshTdBalance(widget, platform) {
    if (!checkRefreshOp())
        return;
    cur_widget = $(widget);
    jsonAjax('/ThirdPartyAjax/getbalance.shtml', {platform: platform},
            success, beforeSend, complete, error
            );
}

function checkRefreshOp() {
    var doRefresh = true;
    $("em").each(function () {
        var html = $(this).html();
        if (html.indexOf("<img") != -1) {
            doRefresh = false;
            return false;
        }
    });
    return doRefresh;
}

var success = function (result) {
    jsonResult = result;
    if (result.type == "Y")
        cur_widget.html(result.data);
    else if (result.code != 444)
        Alert_no(result.data);
}

var beforeSend = function () {
    //$(cur_widget).html('<img src="/Resource/common/images/general/loader2.gif">');
}

var complete = function () {
    //ifError();
}

var error = function () {
    //ifError();
}

function ifError() {
    var aHtml = cur_widget.html();
    if (aHtml.indexOf("<img") != -1)
        cur_widget.html("----");
}