// first way:
// let collapses = document.querySelectorAll('.collapse');

// let activeCollapse;

// for (let index = 0; index < collapses.length; index++) {
//     collapses[index].addEventListener('click', (event) => {
//         if(activeCollapse){
//             activeCollapse.classList.remove('open');
//         }
//         activeCollapse = event.currentTarget;
//         event.currentTarget.classList.toggle('open');
//     })    
// }


// second way(better):

let accordion = document.querySelector('.collapse-content');
let activeCollapse;

accordion.addEventListener('click', (event) => {
    const current = event.target.closest('.collapse');

    if (activeCollapse && activeCollapse !== current) {
        activeCollapse.classList.remove('open');
    }

    if (current) {
        if (current.classList.contains('open')) {
            current.classList.remove('open');
            activeCollapse = null;
        } else {
            current.classList.add('open');
            activeCollapse = current;
        }
    }
});