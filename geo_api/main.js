function askForNotificationPermission(){
    Notification.requestPermission().then(
        function(result){
            if(result == 'granted'){
                notify('اجازه صادر شد.')
            }
        }
    )
}

function getUserLocation(){
    navigator.geolocation.getCurrentPosition(
        function(successResult){
            console.log('success');
            console.log(successResult)
        },
        function(error){
            console.log('error');
            console.log(error);
        }
    );
}

getUserLocation();