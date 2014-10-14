var countdown = function() {
	this.hT = 60 * 60 * 1000;
	this.mT = 60 * 1000;
	this.sT = 1000;
}


var proto = countdown.prototype;

proto.constructor = countdown;


proto.convertDate = function(date) {
	var result = [];
	if (typeof date == "object") {
		date = date.toString();
	}
	result = date.match(/\d{2}:\d{2}:\d{2}/).toString().split(":");
	$.each(result, function(idx, val) {
		val = parseInt(val);
	});
	return result;
}

proto.start = function(date, callback) {
	//	var $countdown = this.children();
	var _h, _m, _s;
	if (!date) return;
	var time = date.getTime();
	if (new Date().getTime() < time) {

		function getHMS() {
			_now = new Date().getTime();
			delta = time - _now;

			if (delta > 24 * 60 * 60 * 1000) {
				return;
			} else {
				_h = _div(delta, this.hT);
				_m = _div((delta - _h * this.hT), this.mT);
				_s = _div((delta - _h * this.hT - _m * this.mT), this.sT);
			}


			$('.transfer-hour').text(_h.toString());
			$('.transfer-minute').text(_m.toString());
			$('.transfer-second').text(_s.toString());
			if (_h === 0 && _m === 0 && _s === 0) {
				clearInterval(handle);
				if (callback && (callback instanceof Function)) {
					callback();
				}
			}
		}

		function _div(exp1, exp2) {
			var n1 = Math.round(exp1); //四舍五入   
			var n2 = Math.round(exp2); //四舍五入  

			var rslt = n1 / n2; //除  

			if (rslt >= 0) {
				rslt = Math.floor(rslt); //返回小于等于原rslt的最大整数。   
			} else {
				rslt = Math.ceil(rslt); //返回大于等于原rslt的最小整数。   
			}

			return rslt;
		}

		_this = this;

		this.handle = setInterval(function() {
			getHMS.apply(_this)
		}, 1000)
	} else {

	}



}

proto.stop = function() {
	clearInterval(this.handle);
	return;
}

proto.checkTime = function() {

}