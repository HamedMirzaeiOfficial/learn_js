function validateName(event){
    if(event.target.value.length < 3){
        alert('نام شما باید حداقل ۳ کاراکتر باشد.');
    }
}

var test1 = `test
            test
            test
            test
        `;


var test2 = 'salam';
var test3 = ' hello ';
var test4 = '1,2,3,4,5,6';

console.log(test2.toUpperCase())
console.log(test2.toLowerCase())
console.log(test2.indexOf('a'))
console.log(test2.includes('m'))
console.log(test2.slice(0, 2))
console.log(test2.replace('s', '1'))
console.log(test2.replace('sa', '1'))
console.log(test3.trim())
console.log(test4.split(','))