"use strict";

/* 24 */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);





/* example 23 */

/* 'while' & 'for' ** very strong */

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = lines; j >= i; j--) {
//         result += " ";
//     }
//     for (let k = 0; k <= i; k++) {
//         result += "*";
//         if (k > 0) {
//             result += "*";
//         }
//     }
//     result += '\n';
// }
// // alert(result);
// console.log(result);


/* 'while' & 'for' * strong */

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // console.log(data);

//     // let a = data.leng
//     let tempArr = [];
//     for (let i = data.length - 1; i >= 0 ; i--) {
//         tempArr.push(data[i]);
//     }
//     for (let i = 0; i < tempArr.length; i++) {
//         data[i] = tempArr[i];
//     }
    
    
//     return data;
// }

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     data.reverse();

//     for (let i = 0; i < data.length; i++) {
//         let a = data [i];
//         result [i] = a;
//     }
//     console.log(result);



//     return result;
// }


// function firstTask() {
    //     const arr = [3, 5, 8, 16, 20, 23, 50];
    //     const result = [];
    
        // for (let i = 0; i < arr.length; i++) {
        //         let a = arr [i];
        //         result [i] = a;
        //     }
        //     console.log(result);
        // }




/* array learn.js */

// let sumInput = [];

// for (let i = 0; i < sumInput.length - 1; i++) {
//     while (sumInput != "") {
//         sumInput [i] = +prompt('input integer', '');
//     }
// }

// let styles = ['Jazz', 'Blues'];

// console.log(styles);

// styles.push('Rock-n-Roll');

// console.log(styles);

// // let a = styles.length / 1;
// // styles [a] = 'Classic';

// styles[Math.floor((styles.length - 1) / 2)] = 'Classic';

// console.log(styles);

// console.log(styles.shift());
// console.log(styles);

// styles.unshift('Rap', 'Raggy');

// console.log(styles);
// let fruits = ['aaa', 'bbb', 'ccc'];

// let shoppingCart = fruits;
// shoppingCart.push('ddd');
// console.log(fruits.length);

// let arr = new Array(5);
// arr [1] = 2;
// arr [6] = 3;
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[1]);
// console.log(arr[6]);
// console.log(arr.length);

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(arr[1]);

// let arr = ['a', 'b', 'c'];

// console.log(arr);
// console.log(arr[1]);

// let arr = ['a', 'b', 'c'];

// for (let key in arr) {
//     console.log(arr[key]);
// }

// let fruits = ['aaa', 'bbb', 'ccc'];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let arr = ['jfjffj', 'fjjfj', 'ffff'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }




/* 'while' & 'for' simple */


// for (let i = 2; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 0; i <= 5; i++) {
//         arrayOfNumbers [i] = i + 5;
//     }
//     return arrayOfNumbers;
// }
// console.log(fifthTask());



// for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//                 continue;
//             } else {
//                     console.log(i);
//                 }
// }

// let i = 2;

// while (i < 16) {
//         i++;
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
            
// let i = 2;
            
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     }
//     console.log(i);
// }

//
// for (let i = 20; i > 9; i--) {
//     console.log(i);
//     if (i === 14)
//         break;
// }

// function firstTask() {
//     num = 5;
//     while (num < 11);
//     break;
//     console.log(num);
// }

// first: for (let i = 0; i < 3; i++) {
//     console.log(`first level: ${i}`);
//     second: for (let j = 0; j < 3; j++) {
//         if (j === 2) continue first;    /* break */
//         console.log(`second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue second; /* break */
//             console.log(`third level: ${k}`);
//         }
//     }
// }

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);


/* example 22 */
// let num = 5;

// while (num < 11) {
//     console.log(num);
//     num++;
// }
    
/* do {
    console.log(num);
    num++;
}
while (num < 55);
 */

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//         // break;
//     }
//     console.log(i);
//     console.log(num);
//     num++;
// }


/* my code example 1 */
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// const answerLastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//       answerStarsFilm = prompt('На сколько оцените его?', '');
// let personalMovieDB = {
//         count: numberOfFilms,
//         movies: {
//             answerLastFilm,
//             answerStarsFilm,
//         },
//         actors: {},
//         genres: [],
//         privat: false
// };


// console.log(personalMovieDB.movies);
// console.log(personalMovieDB.count);
// console.log(movies.name);
// console.log(movies.star);

      
// let movies = {
//     answerLastFilm: answerStarsfilm
// };



/* code by Ivan */

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



/* example */
// console.log( NaN || 2 || undefined );
 
// console.log( NaN && 2 && undefined );
 
// console.log( 1 && 2 && 3 );
 
// console.log( !1 && 2 || !3 );
 
// console.log( 25 || null && !3 );
 
// console.log( NaN || null || !3 || undefined || 5);
 
// console.log( NaN || null && !3 && undefined || 5);


// console.log(5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }


/* my code +++ */
// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('Какую оценку ему дадите?', ''),
//       e = prompt('Actors?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('Какую оценку ему дадите?', ''),
//       f = prompt('Actors?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// personalMovieDB.actors = [e];
// personalMovieDB.actors = [f];

// console.log(personalMovieDB);
// console.log(`Я посмотрел ${numberOfFilms} фильмов`);


// const num = +prompt('Введите число');

// if (num == 50) {
//     console.log('ok');
// } else if (num <= 49) {
//     console.log('small');
// } else {
//     console.log('big');
// }

/* example */
// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// a = 11;
// console.log(a);

// console.log('p');
// console.log('hello');
// alert('hello');

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;

// console.log(number);

// camelCase
// snake_case
// UPPER_CASE
// kebab-case
// PascalCase

// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.age, ['name']);
// console.log(obj.isMarried);

// let arr = ['aaa', ['a', 'b', 'c'], 'bbb'];
// console.log(arr[1]);

// const isChecked = false,
//       isClose = false;

// console.log(isChecked && isClose);
// 