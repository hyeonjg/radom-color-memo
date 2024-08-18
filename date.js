function nowClock(){
	now = new Date();
	year = now.getFullYear();
	month = now.getMonth()+1; //getMonth는 1부터 시작하기 때문이다.
	date = now.getDate();
	hour = now.getHours();
	minute = now.getMinutes();

	clock.textContent = year+'/'+month+'/'+date+' '+hour+':'+minute
}

setInterval(nowClock, 1000);