let order = [];
let clickedOrder = [];
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

// cria ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createElementColor(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}

// acende próxima cor
let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 100);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// checa se os botoes clicados estao na mesma ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação= ${score}\nVocê Acertou!\nIniciando próximo nível!`);  
        nextLevel();
    }
}
// 
// função para o click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createElementColor(color).classList.add('selected');

    setTimeout(() => {
       createElementColor(color).classList.remove('selected');
       checkOrder();   
    }, 250 )

    
}

// função que retorna a cor
let createElementColor = (color) => {
    if(color == 0){
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2){
        return yellow;
    } else if (color == 3){
        return blue;
    }
}

// função para proximo nivel do jogo
let nextLevel = () => {
    score ++;
    shuffleOrder();
}

// quando perder o jogo
let gameOver = () => {
    score -= 1;
    alert (`Pontuação= ${score}\nVocê perdeu!\nClique em OK paraum novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Inicio de jogo
let playGame = () => {
    alert('Bem vindo ao Genesis iniciando novo jogo!');
    score = 0;

    nextLevel();
}

// evento de click do jogo
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();

// ainda tem a necessidade de melhorar o piscar das cores
// estou atualmente aleternando direto no css