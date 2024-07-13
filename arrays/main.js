var names = ['hamed', 'james', 'ian', 'mark', 'hamed', 'paul']

console.log(typeof names)
console.log(Array.isArray(names))
console.log(names instanceof Array)

console.log(names.indexOf('james'))

for(var i=0; i<names.length; i++){
    console.log(names[i]);
}

console.log("----------------------------------")
names.forEach(element  => {
    console.log(element)
});

console.log("----------------------------------")
names.forEach(function(element, index){
    console.log(index, element);
})

names.push("test")
console.log(names)
names.pop()
console.log(names)

console.log(names.toString())
console.log(names.join('-'))


var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = arr1.concat(arr2)
console.log(arr3)

var numbers = [20, 13, 13, 13, 12, 30, 24, 10, 2, 4, 1, 132]
var new_numbers = numbers.filter(function(value){
    return value > 20;
})

var new_numbers_2 = numbers.filter((value)=>{
    return value > 20;
})

console.log(new_numbers);
console.log(new_numbers_2);


var new_numbers_3 = numbers.map((value)=>{
    return value * 2;
})

console.log(new_numbers_3);


var big_values = [20, 40, 50, 50, 12]
var result = big_values.every((value)=>{
    return value > 30;
})
console.log(result)

var big_values_2 = [20, 40, 50, 50, 12]
var result_2 = big_values_2.every((value)=>{
    return value > 10;
})
console.log(result_2)

var big_values_3 = [20, 40, 50, 50, 12]
var result = big_values_3.some((value)=>{
    return value > 20;
})


