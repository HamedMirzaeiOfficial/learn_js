function showTime(event){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    var postfix = ' AM';

    if(hour > 12){
        hour -= 12;
        postfix = ' PM';
    }

    if(hour < 10){
        hour = "0" + hour;
    }

    if(minute < 10){
        minute = "0" + minute;
    }
    
    if(second < 10){
        second = "0" + second; 
    }

    var clock = hour + ':' + minute + ':' + second + postfix;
    document.getElementById('myClockDisplay').textContent = clock;
    setTimeout(showTime, 1000);
}
showTime();