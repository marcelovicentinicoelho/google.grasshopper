let pic1 = 'exercicio11_imagem02.jpg';
let pic2 = 'exercicio11_imagem03.jpg';

let img = document.getElementById('pic');

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

button1.addEventListener('click', () => {
    img.src = pic1;
});

button2.addEventListener('click', () => {
    img.src = pic2;
})
