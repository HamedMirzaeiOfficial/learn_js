let myPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log(1); 
        resolve();
    }, 3000);
})

myPromise.then(result => test(), error => alert("oops"))    


function test(){
    console.log('test');
}

async function f(){
    console.log("function f")
}

f().then(console.log("after f function"));


async function fun2(){
    console.log("start func2");
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000)
    });

    let result = await promise; 
    alert(result);
}
fun2()
