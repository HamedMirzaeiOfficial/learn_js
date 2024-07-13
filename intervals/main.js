function test(a){
    console.log(a);
    console.log(new Date());
}

var timerId = setTimeout(test, 5000, 'salam');
clearTimeout(timerId);


// works every 2 seconds
var timerId = setInterval(test, 2000, 'hello');
// clear interval after 6 seconds
setTimeout(function(){
    clearInterval(timerId)
}, 6000)

// infinit  
// setTimeout(function run(){
//     console.log('test');
//     setTimeout(run, 1000);
// }, 1000)


var count = 0;
setTimeout(function run(){
    count++;
    console.log('test');
    if(count <= 10)
    {
        setTimeout(run, 1000);
    }
}, 1000)