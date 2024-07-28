import { generateElement } from './generate_element.js';

export const container = generateElement('div', { class: 'container' });

function generateCart(nameValue, ageValue) {
    const nameElement = generateElement('span', null, `name: ${nameValue}`);
    const ageElement = generateElement('span', null, `age: ${ageValue}`);
    const cart = generateElement('div', { class: 'cart' }, nameElement, ageElement);
    return cart;
}

const usersData = [
    { name: 'hamed', age: 23 },
    { name: 'amir', age: 21 },
    { name: 'milad', age: 25 }
];

usersData.forEach(user => container.appendChild(generateCart(user.name, user.age)));

