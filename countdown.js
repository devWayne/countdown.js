var countdown = function(option) {
	this.hT = 60 * 60 * 1000;
	this.mT = 60 * 1000;
	this.sT = 1000;

	option&&this.init(option);
}


var proto = countdown.prototype;

proto.constructor = countdown;


proto.init=function(option){


}

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

		var _this = this;

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


			$('.transfer-hour').text(fix(_h.toString()));
			$('.transfer-minute').text(fix(_m.toString()));
			$('.transfer-second').text(fix(_s.toString()));
			if (_h === 0 && _m === 0 && _s === 0) {
				clearInterval(handle);
				if (callback && (callback instanceof Function)) {
					callback();
				}
			}

			this.handle = setTimeout(function() {
				getHMS.apply(_this)
			}, 1000)
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

		function fix(n){
			if(parseInt(n)<10){
				n="0"+n;
			}
			return n;
		}

		getHMS();

	} else {

	}



}

proto.stop = function() {
	clearInterval(this.handle);
	return;
}

proto.checkTime = function() {

}

if (typeof exports !== 'undefined' && module.exports) {
    module.exports = exports = countdown;
} 