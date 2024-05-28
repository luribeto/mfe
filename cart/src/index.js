import faker from 'faker';

const el = document.querySelector('#cart-dev');
const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

el.innerHTML = cartText;
