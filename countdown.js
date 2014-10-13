var countdown = function() {

}

var handle;

var proto = countdown.prototype;

proto.constructor = countdown;


proto.convertDate = function(date) {
	var result = [];
	if (typeof date == "object") {
		date = date.toString();
	}
	result = date.match(/\d{2}:\d{2}:\d{2}/).toString().split(":");
	return result;
}

proto.start = function(time,callback) {
	//	var $countdown = this.children();
		if (!time) return;
		if (true) {
			var _arr = this.convertDate(time);
			handle = setInterval(function() {
				_now = new Date();
				_arrnow = proto.convertDate(_now);
				_h = (parseInt(_arr[0]) - parseInt(_arrnow[0])) - 1;
				_m = 60 - (parseInt(_arrnow[1]) - parseInt(_arr[1]));
				_s = 60 - (parseInt(_arrnow[2]) - parseInt(_arr[2]));
				$('.transfer-hour').text(_h.toString());
				$('.transfer-minute').text(_m.toString());
				$('.transfer-second').text(_s.toString());
				if(_h===0 && _m===0 && _s===0){
					clearInterval(handle);
					if (callback && (callback instanceof Function)) {
							callback();
						}
				}
			}, 1000)
		} else {

		}

}

proto.stop = function() {
	clearInterval(handle);
	return;
}

proto.checkTime=function(){
	
}