let title = document.createElement('h1');
title.textContent = 'Cool Cat';

let picture = document.createElement('img');
picture.src = '../../static/images/catStretching.jpg';

let description = document.createElement('p');
description.textContent = 'Thank you cat, very cool!';

document.body.appendChild(title);
document.body.appendChild(picture);
document.body.appendChild(description);
