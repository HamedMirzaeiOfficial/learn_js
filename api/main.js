// XMLHttpRequest (ajax) api:
// var httpRequest = new XMLHttpRequest()
// console.log(httpRequest);
// httpRequest.onreadystatechange = function(event){
//     console.log(event.target.status);
//     if(event.target.readyState == XMLHttpRequest.DONE && event.target.status == 200){
//         console.log(event.target.response);
//     }
// }

// var url = 'https://www.googleapis.com/books/v1/volumes?q=name:iran';
// httpRequest.open('GET', url);

// httpRequest.send();


// fetch api(better than XMLHttpRequest api):

var url = 'https://www.googleapis.com/books/v1/volumes?q=name:iran';
var promise = fetch(url);

promise.then(
    function(response){
        response.json().then(
            function(json){
                console.log(json);
            }
        )
    }
)