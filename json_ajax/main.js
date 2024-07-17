" use strict ";
let test = {name: "hamed", age: 20};

let jsonTest = JSON.stringify(test);
console.log(jsonTest);

let testArray = [1, 2, 3, 4, 5, 6];
let jsonArray = JSON.stringify(testArray)
console.log(jsonArray, typeof jsonArray)

let arrayAgain = JSON.parse(jsonArray)
console.log(arrayAgain, typeof arrayAgain)


// ajax:
let xhttp = new XMLHttpRequest()
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhttp.send()
let response;

function processResult(result){
    result.forEach(function(element){
        console.log(element);
    })
}

// 3 times log. 3 times state changes. 2, 3, 4
xhttp.onreadystatechange = function(){
    console.log(this);
    if(this.readyState == 4 && this.status == 200){
        console.log('ajax was succeeded')
        response = JSON.parse(this.response);
        processResult(response)
    }
}
