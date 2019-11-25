var topUrl = "";

function test() {
	var span, d = document, li, a, i, lis = d.getElementById('ttcesu').getElementsByTagName('li');
	for (i = 0; li = lis[i++]; ) {
		a = li.getElementsByTagName('a')[0];
		if (!a) { continue; }
		span = d.createElement('span');
		span.ctime=new Date();
		span.innerHTML = '测速中...<img src="' + a.href + '" border="0" width="1" height="1" onerror="testresult(this)" />';
		li.appendChild(span);
	}
};
function testresult(img) {
	if(!topUrl) {
		topUrl = img.src;
		setTopUrl();
	}
	var span = img.parentNode;
	var n = 'em';
	if (!testresult.isrun) { n = 'b'; testresult.isrun = true; }
	span.innerHTML = '<' + n + '>' + ((new Date() - span.ctime) / 1000).toFixed(2) + '秒</' + n + '>';
};
var ran = Math.random();

function setTopUrl() {
	$('.topurl').each(function() {
		$(this).attr('href', topUrl + $(this).attr('href'));
	});
};