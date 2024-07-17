" use strict "

let myDiv = document.getElementById('myDiv');
console.log(myDiv.className)
console.log(myDiv.getAttribute('developer-name'))
console.log(myDiv.childNodes[1].type)
myDiv.setAttribute('new-attr', 'test')
console.log(myDiv.getAttribute('new-attr'))
myDiv.removeAttribute('new-attr');

// ---------------------------
let newDiv = document.getElementsByClassName('new-elements')[0];
console.log(newDiv)
newElement1 = document.createElement('ul');
newElement1.className = 'myUl';
newElement1.innerHTML = '<li id="first">the first list</li>'; 
console.log(newElement1);
myDiv.append(newElement1);

// where options: before, prepend, append, after like li.before, li.after, ...
function creator(where){
    if (!(where in newElement1)){
        alert('error!!! function not found')
        return;
    } 
    
    let li = document.createElement('li');
    li.innerHTML = '<strong>new item</strong>';
    newElement1[where](li);

    liCopy = li.cloneNode(true); 
    // liCopy = li.cloneNode(false);  // not create the attributes and inner elements

    console.log(liCopy);
    setTimeout(function(){
        li.remove();
    }, 2000)

}

function getPlace(){
    let whereToAdd = prompt('Where you want to add');
    creator(whereToAdd);
}


