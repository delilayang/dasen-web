$(document).ready(function() {
	$("#addFavorite,#addFavorite2").click(function() {
		var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL';
		if (document.all) {
			window.external.addFavorite(window.location.href, document.title);
		} else if (window.sidebar) {
			window.sidebar.addPanel(document.title, window.location.href, "");
		} else {
			alert('该版本浏览器无法完成此操作。\n您可以尝试通过快捷键' + ctrl + '+D加入到收藏夹~');
		}
		return false;
	});

	$("#setHomePage,#setHomePage2").click(function() {
		try {
			this.style.behavior = "url(#default#homepage)";
			this.setHomePage(window.location.href);
		} catch (e) {
			if (window.netscape) {
				try {
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				} catch (e) {
					alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入'about:config' 并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
					return false;
				}
				var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
				prefs.setCharPref('browser.startup.homepage', window.location.host);
			}
		}
		return false;
	});
});