function countdown(time){
	var dayTime=1000*60*60*24,
		hourTime=1000*60*60,
		minuteTime=1000*60,
		secondTime=1000;

	var day=Math.floor(time/dayTime);
	var	hour=Math.floor((time-day*dayTime)/hourTime);
	var minute=Math.floor((time-day*dayTime-hour*hourTime)/minuteTime);
	var second=Math.floor((time-day*dayTime-hour*hourTime-minute*minuteTime)/secondTime);
	console.log('day:'+day+'hour:'+hour+'minute:'+minute+'second:'+second);
}
