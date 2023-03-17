'use strict';


/* Получение элемента по уникальному идентификатору. */

const box = document.getElementById('box');


/* Получение элемента по Тэгу. Отдельный элемент через [] */

const btns = document.getElementsByTagName('button');


/* Получение элемента по классу. Отдельный элемент через [] */

const circles = document.getElementsByClassName('circle');


/* Получение элемента по CSS селектору. К отдельному элементу через [] */

const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => console.log(item));


/* Первый попавшийся элемент, работает с CSS селекторами, точки перед классом, # перед тэгом  */

const oneHeart = document.querySelector('.heart');

const wrapper = document.querySelector('.wrapper');


const div = document.createElement('div');

div.classList.add('black');

wrapper.append(div);

div.innerHTML = '<h1>Hello</h1>';

// div.insertAdjacentHTML('afterbegin', '<h3>By</h3>');

div. insertAdjacentHTML('afterend', '<h3>By</h3>');

// div.insertAdjacentHTML('beforebegin', '<h3>By</h3>');

// div.textContent = 'Hello';

// document.querySelectorAll('.heart')[1].append(div);

// document.body.append(div);

// document.body.prepend(div);

// hearts[1].before(div);

// hearts[1].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// console.log(div);




hearts.forEach((item, index) => {
    if (index % 2 == 0) {
        item.style.backgroundColor = 'green';
    } else {
        item.style.backgroundColor = 'pink';
    }
})

for (let i = 0; i < circles.length; i++) {
    if (i % 2 == 0) {
        circles[i].style.background = 'green';
    } else {
        circles[i].style.background = 'pink';
    }
}




