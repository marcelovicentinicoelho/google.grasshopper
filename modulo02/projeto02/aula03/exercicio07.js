let picture = document.createElement('img');
picture.src = '../../static/images/sfDog.jpg';

let text1 = document.createElement('p');
text1.textContent = 'I am a good boy.';

let text2 = document.createElement('p');
text2.textContent = 'I like my chew toy.';

let text3 = document.createElement('p');
text3.textContent = 'I like bringing joy.';

document.body.appendChild(picture);
document.body.appendChild(text1);
document.body.appendChild(text2);
document.body.appendChild(text3);
