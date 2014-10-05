(function($){
	
	var countdown=function(){

	}

	var handle;

	var proto=countdown.prototype;

	proto.constructor=countdown;

	proto.convert=function(time){
		var result=[];
		var dayTime=1000*60*60*24,
			hourTime=1000*60*60,
			minuteTime=1000*60,
			secondTime=1000;

		var day=Math.floor(time/dayTime);
		var	hour=Math.floor((time-day*dayTime)/hourTime);
		var minute=Math.floor((time-day*dayTime-hour*hourTime)/minuteTime);
		var second=Math.floor((time-day*dayTime-hour*hourTime-minute*minuteTime)/secondTime);
		console.log('day:'+day+'hour:'+hour+'minute:'+minute+'second:'+second);
		result.push(second);
		result.push(minute);
		result.push(hour);
		result.push(day);
		return result;
	}

	proto.start=function(){
		var $countdown=this.children();
		setTimeInterval(function(){
			var _date=new Date();
			var _arr=proto.convert(_date.getTime());
			$countdown.eq(0).text=_arr[0];
			$countdown.eq(1).text=_arr[1];
			$countdown.eq(2).text=_arr[2];
			$countdown.eq(3).text=_arr[3];
		})
	}

	proto.stop=function(){
		handle.clearInterval();
		return;
	}

	
})($)
