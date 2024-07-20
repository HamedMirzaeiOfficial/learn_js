function askForNotificationPermission(){
    Notification.requestPermission().then(
        function(result){
            if(result == 'granted'){
                notify('اجازه صادر شد.')
            }
        }
    )
}

function notify(text){
    var notification = new Notification(text, {
        body: "این یک متن تستی است.", 
        requireInteraction: true,//not hide after a few seconds.
    });
    notification.onclick = function(){
        document.write('click on notification!')
    }
}

askForNotificationPermission()
