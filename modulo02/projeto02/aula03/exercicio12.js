import { pictures } from 'animalPics.data';

for (let picture of pictures) {
    let img = document.createElement('img');
    img.src = picture;
    
    let button = document.createElement('button');
    button.textContent = 'Click Here'; 
    
    document.body.appendChild(img);
    document.body.appendChild(button);
}
