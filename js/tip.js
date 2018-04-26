//var code;
//var msg;

// tip是提示信息，type:'success'是成功信息，'danger'是失败信息,'info'是普通信息,'warning'是警告信息
function showTip(msg, type) {
	var $tip = $('#tip');
	if ($tip.length == 0) {
		// $tip = $('<strong id="tip" style="position:absolute;top:50px;left:
		// 50%;z-index:9999"></strong>');
		$tip = $('<div id="tip" style="position:absolute;top:50px;left:50%;z-index:9999">'
				+

				'</div>');
		$('body').append($tip);
	}
	// $tip.stop(true).prop('class', 'alert alert-' + type).text(msg).css(
	// 'margin-left', -$tip.outerWidth() / 2).fadeIn(500).delay(2000)
	// .fadeOut(500);

	$tip.stop(true).prop('class', 'alert alert-' + type).html(
			'<a href="#" class="close" data-dismiss="alert">&times;</a>' + msg)
			.css('margin-left', -$tip.outerWidth() / 2).fadeIn(500).delay(2000)
			.fadeOut(500);
}

function showInfo(msg) {
	showTip(msg, 'info');
}

function showSuccess(msg) {
	console.log(msg);
	showTip(msg, 'success');
}

function showDanger(msg) {
	showTip(msg, 'danger');
}

function showWarning(msg, $focus, clear) {
	showTip(msg, 'warning');
	if ($focus) {
		$focus.focus();
		if (clear)
			$focus.val('');
	}
	return false;
}

function showMsgTip() {
	console.log("code=" + code + ",msg=" + msg);
	if (code) {
		switch (code) {
		case '0':
			showSuccess(msg);
			break;
		case '-1':
			showDanger(msg);
			break;
		default:
			showInfo(msg);
		}
	}
}

$(function() {	
	showMsgTip();
});

