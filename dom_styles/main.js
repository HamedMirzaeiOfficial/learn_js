let element = document.getElementById('myDiv')
console.log(element.classList)
element.classList.add('class1', 'class2')
console.log(element.classList)
element.classList.remove('class1')
console.log(element.classList)
console.log(element.classList.contains('class1'))

element.classList.toggle('show');
console.log(element.classList)
element.classList.toggle('show');
console.log(element.classList)


let pElement = document.getElementById('test');
function toggleP(event){
    pElement.classList.toggle('hidden');
}

// inline css styles:
console.log(pElement.style)
// get all styles:
console.log(getComputedStyle(pElement))
console.log(getComputedStyle(pElement).padding)

let newBox = document.getElementById('new-box');
console.log(newBox.style)
newBox.style.padding = '120px';
newBox.style.textAlign = 'center';

function changeColor(){
    newBox.style.backgroundColor = prompt('دوست دارید چه رنگی باشه؟');
}