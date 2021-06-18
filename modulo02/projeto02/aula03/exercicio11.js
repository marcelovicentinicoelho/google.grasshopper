let title = document.createElement('h1');
title.textContent = 'Cuteness';

let catImg = document.createElement('img');
catImg.src =  '../../static/images/greyTabby.jpg';

let catButton = document.createElement('button');
catButton.textContent = 'Click Here!';

let dogImg = document.createElement('img');
dogImg.src = '../../static/images/couchDog.jpg';

let dogButton = document.createElement('button');
dogButton.textContent = 'Dog Button';

document.body.appendChild(title);
document.body.appendChild(catImg);
document.body.appendChild(catButton);
document.body.appendChild(dogImg);
document.body.appendChild(dogButton);
