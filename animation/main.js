// function animateToRight(){
//     myButton = document.getElementById('myButton');
//     let circle = myButton.childNodes[1];
//     let x = 0;
//     let intervalId = setInterval(() => {
//         x++;
//         if(x == 66){
//             clearInterval(intervalId);
//         }
//         circle.style.transform = `translate3d(${x}px,0,0)`;
//     }, 50);
// }

myButton = document.getElementById('myButton');
let circle = myButton.childNodes[1];
let x = 0;

function animateToRight(){
    setTimeout(moveCircle, 20);
}

function moveCircle(){
    x++;
    circle.style.transform = `translate3d(${x}px,0,0)`;
    let randomNumber = Math.random() * 100 / 2;

    switch(x){
        case 30:
            randomNumber = Math.random() * 100 / 2;
            break;
        case 60:
            randomNumber = Math.random() * 100 / 2;
            break;
    }

    if(x < 60){
        setTimeout(moveCircle, randomNumber);
    }
    
}