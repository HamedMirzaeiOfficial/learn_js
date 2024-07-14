"use strict";

let div1 = document.getElementById('idddd');
console.log(div1)

let div2 = document.getElementsByTagName('div');
console.log(div2);
console.dir(div2); 

let test = document.getElementsByClassName('myTable');
console.log(test);

let tables = document.querySelectorAll('table.myTable')
console.log(tables);

let myTable = document.querySelector('.myTable');
console.log(myTable);

let myLi = document.querySelector('ul li');
console.log(myLi);


let closestElement = myLi.closest('div');
console.log(closestElement);