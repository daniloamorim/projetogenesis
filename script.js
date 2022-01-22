let order = [];
let clickOrder = [];
let score = 0;

// Difinindo variaveis do array:
// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for (let i in order) {
        let elementColor = createElement(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}

let ligthColor = (element, number) => {
    number = time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    }, timeout);
}