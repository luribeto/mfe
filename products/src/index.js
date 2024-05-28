import faker from 'faker';

const el = document.querySelector('#dev-products');
let products = '';

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}
debugger
el.innerHTML = products;
