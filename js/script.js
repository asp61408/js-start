"use strict";

/* result scool */
// let type = 1;
// let cells = [100, 50, 20, 80, 30, 10, 60];
// let sum = 0;

// if (type === 1) {
//     for (let i = 0; i < cells.length; i+= 2) {
//         sum += cells[i];
//     }
// } else if (type === 2) {
//     for (let i = 1; i < cells.length; i+= 2) {
//         sum += cells[i];
//     }
// } else {
//     for (let i = 0; i < cells.length; i++) {
//         sum += cells[i];
//     }
// }
// console.log(sum);


// let type = 2;
// let stopNumber = 6;
// let sum = 0;

// if (type === 1) {
//     for (let i = 0; i < stopNumber; i+= 2) {
//         sum += i;
//     }
// } else if (type === 2) {
//     for (let i = 1; i < stopNumber; i+= 2) {
//         sum += i;
//     }
// } else {
//     for (let i = 0; i < stopNumber; i++) {
//         sum += i;
//     }
// }

// console.log(sum);


// let a = 10;
// let b = 15;

// if (a > b) {
//     console.log(a + b);
// } else if (a < b) {
//     console.log(b - a);
// } else {
//     console.log(a);
// }


// let cells = [100, 50, 20, 80, 30, 10, 60];

// let sum = 0;

// for (let i = 0; i < cells.length; i++) {
//     sum += cells[i] * (i + cells.length);
// }

// console.log(sum);


// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его?', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


/* exercise 12 */

/* 1 Напишите функцию reverse, которая принимает в себя строку
 и возвращает эту строку в обратном порядке */

// const someString = 'This is some strange string';

// function reverse(str) {
//     // return str.split('').reverse().join('');
//     if (typeof str !== 'string') {
//         return 'Ошибка';
//     }
//     let arrStr = str.split('');
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += arrStr[i];
//     }
//     return newStr;
// }

// console.log(reverse(someString));


/* 2 Создать главную функцию банкомата availableCurr, которая принимает 2 аргумента:
 1-й - массив со всеми доступными валютами из 2-х банков(не повторяются),
  2-й - необязательный, который показывает, какая валюта закончилась в банкомате.
   Если массив в 1-м аргументе пустой, возвращаем строку - "Нет доступных валют" */

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != missingCurr[i]) {
            newArr.push(arr[i]);
        } else {
            continue;
        }
    }

    let allCurr = 'Доступные валюты:' + '\n';
    let listMissingCurr = '';

    if (missingCurr) {
        for (let i = 0; i < missingCurr.length; i++) {
            listMissingCurr += missingCurr[i] + '\n';
        }
        // return listMissingCurr;
    }
    if (arr == 0) {
        return 'Нет доступных валют';
    }
    for (let i = 0; i < newArr.length; i++) {
        allCurr += newArr[i] + '\n';
    }
    return allCurr;
}

// console.log(availableCurr(listMissingCurr));
console.log(availableCurr(['USD', 'EUR', 'UAH', 'CNY', 'RUB'], ['CNY']));


/* exercise 11 */

/* 1 Напишите функцию showFamily, которая будет принимать в себя массив строк
 и возвращать сообщение в нужном формате */


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let result = 'Семья состоит из: ';
//     if (arr.length === 0) {
//         return 'Семья пуста';
//     }
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i] + ' ';
//     }
//     return result;
// }

// console.log(showFamily(family));


/* Напишите функцию standardizeStrings, которая будет принимать в себя массив строк
 и будет выводить в консоль эти строки в нижнем регистре */

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     // let stringArr = favoriteCities.join();
//     let stringArr = '';
//     for (let i = 0; i < arr.length; i++) {
//         stringArr += i + 1 + ' |  ' + arr[i] + '\n';
//     }
//     return stringArr.toLowerCase();
// }

// console.log(standardizeStrings(favoriteCities));


// (i + 1) + ' |  ' +



/* exercise 10 */


/* 1 напишите функцию showExperience, которая будет принимать в себя объект 
со всеми данными и возвращть строку с опытом*/

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
    //             js: '20%',
    //             php: '10%'
    //         },
    //         exp: '1 month'
    //     }
    // };
        
// function showExperience() {
//     return personalPlanPeter.skills.exp;
// }    
    
// console.log(showExperience());
    

/* 2 Напишите функцию showProgrammingLangs, которая будет принимать 
в себя объект со всеми данными и возвращать строку в нужном виде*/


// function showProgrammingLangs(plan) {
    //     const programmingLangs = personalPlanPeter.skills.programmingLangs;    /*деструктуриз. programmingLangs{}*/
    //     const languages = Object.keys(programmingLangs);        /*создаем массив с ключами объекта programmingLangs*/
    //     // console.log(languages.length);       /* Вывел в консоль длину массива для проверки(для себя) */
    //     if (languages.length === 0) {        /* проверка на пустой массив */
    //         return '000';
    //     }
    //     let result = '';         /* переменная для строки с результатом */
//     for (let i = 0; i < languages.length; i++) {         /* перебор массива с 0 до длины */
//         result += `Язык ${languages[i]} изучен на ${programmingLangs[languages[i]]}\n`;  /*создание строки в result*/
//     }
//     return result;      /* возвращаем созданную строку */
// }

// console.log(showProgrammingLangs(personalPlanPeter));



/* 3 Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде*/

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '30%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function() {                                          /* создаем метод в {} */
//         const showLangs = personalPlanPeter.skills.languages;              /* деструкт. {} */
//         const languages = Object.keys(showLangs);                             /* создаем массив из ключей {} */
        
//         let result = `Мне ${personalPlanPeter.age} и я владею языками: `;   /* создаем строку */
//         for (let i = 0; i < languages.length; i++) {                      /* перебираем ключи из {} в массиве */
//             result += `${showLangs[languages[i]].toUpperCase()} `;   /* записываем результ по индексам из фор */
//         } 
//         return result;   /* возвращаем результ */
//     }
// };

// personalPlanPeter.showAgeAndLangs();
// console.log(personalPlanPeter.showAgeAndLangs());



/* Найти самое длинное слово в строке и вернуть его */

// function getBigWord(str) {
    //     const strin = str.split(' ');
//     let longWord = '';
//     for (let i = 0; i < strin.length; i++) {
//         if (strin[i].length > longWord.length) {
//         }
//     }
//     return longWord;
// }

// console.log(getBigWord('fff jjjjjjj fljlk jgfuytyud jhj gfgygy'));



/* вернуть слова без '-' */

// function splitStr(str, splitSymbol) {
//     const symbolIndexes = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === splitSymbol) {
//             symbolIndexes.push(i);
//         }
//     }
//     const result = [];
//     symbolIndexes.forEach((index, i, arr) => {
//         if (i === 0) {
//             result.push(str.slice(0, index));
//             return;
//         }

//         result.push(str.slice(arr[i - 1] + 1, index));

//         if (i === arr.length - 1) {
//             result.push(str.slice(index + 1));
//         }
//     });
//     return result;
// }

// console.log(splitStr('aaa-bbb-ccc-eee-fff', '-'));




/* 35 lesson */

// let a = 5;
// let b = a;

// b = b + 5;          // Примитивы не перезаписываются  a = 5 

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 10
// };

// const copy = obj;

// copy.a = 10;       // Objects перезаписываются, потому что присваиваются по ссылке

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};               // Создаем пустой объект

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];      // Копируем mainObj в objCopy
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 5,
//     b: 7,
//     c: {
//         x: 4,
//         y: 7
//     }
// };

// const newNumbers = copy(numbers);         // Вызываем функцию copy(), которая копирует объект

// newNumbers.a = 10;    // Изменяет только копию
// newNumbers.c.x = 10;  // Изменяет оба объекта

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 10,
//     e: 17
// };

// // console.log(Object.assign(numbers, add));  // Добавляем в numbers объект add

// const clone = Object.assign({}, add);  // Added in 'clone' object 'add'

// clone.d = 20;                          // change object 'clone' 

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];           // массив
// const newArray = oldArray.slice();          // копируем массив методом slice()--!!!можно передать количество значений

// newArray[1] = 'aaaaaaaaaaaa';
// console.log(oldArray);
// console.log(newArray);



// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];  // ... spread оператор разворачивает объект

// console.log(internet);



// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];

// log(...num);               // ... spread оператор



// const arr = ['aaa', '222'];
// const newArr = [...arr];           // Копирование массива 

// console.log(newArr);
// newArr[0] = 'bbb';

// console.log(newArr);
// console.log(arr);


// const obj = {
//     one: 1,
//     two: 2
// };

// const newObj = {...obj};          // Копирование объекта

// console.log(newObj);
// newObj.one = 22;

// console.log(newObj);


/* 33 lesson */

// const arr = [11, 12, 3, 24, 5, 6];
// arr.sort(compareNum);

// console.log(arr.join('   '));

// function compareNum(a, b) {
//     return a - b;
// }


// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));


/* 32 lesson */

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;
// console.log(options);

// console.log(options['colors']['border']);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }




/* exercise 9** */


/* semen */
// function fib(fibLen) {
//     const fibArr = [0, 1];

//     if(!Number.isInteger(fibLen) || fibLen < 0) {
//         return ''
//     }
//     if(fibLen < 3) {
//         return fibArr.slice(0, fibLen).join(' ')
//     }
    
//     while (fibLen != fibArr.length) {
//         fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
//     }
//     return fibArr.join(' ');
// }



/* my code(work) */
// function fib(fibLen) {
//     const arr = [0, 1];
//     if (!Number.isInteger(fibLen)) {
//         return '000';
//     }

//     for (let i = 2; i < fibLen; i++) {
//         let nextNumFib = arr[i - 1] + arr[i - 2];
//             arr.push(nextNumFib);
//             // console.log(arr);
//     }
//     return arr;
// }

// console.log(fib(5));



/* exercise 8 (*) */

// function findMaxNumber() {
//     if (arguments.length != 4) {
//         return '000';
//     }
//     for (let i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] != 'number') {
//             return 'aaa';
//         }
//     }
//     return Math.max(...arguments);
// }

// // findMaxNumber(Math.max(1, 2, 3, 4));
// console.log(findMaxNumber(1, 5, 3, 4));


// function getTimeFromMinutes(minutes) {

//     let hours = Math.floor(minutes / 60);
//     let min = minutes % 60;

//     if (isNaN(minutes) || minutes < 0 || !Number.isInteger(minutes) || !minutes) {
//         return `Ошибка, проверьте данные`;
//     }
//     if (hours >= 5) {
//         return `Это ${hours} часов и ${min} минут`;
//     }
//     if (hours == 1) {
//         return `Это ${hours} час и ${min} минут`;
//     }
//     if (hours < 5 && hours > 1) {
//         return `Это ${hours} часа и ${min} минут`;
//     }
//     if (minutes === 0) {
//         return `Это ${hours} часов и ${min} минут`;
//     }

// }

// getTimeFromMinutes();

// console.log(getTimeFromMinutes());

// console.log(typeof getTimeFromMinutes());


/* exercise 7 (*) */

// function getCoupeNumber(numTicket) {
    
//     let numCoupe = numTicket / 4;
//     if (!Number.isInteger(numTicket) || numTicket < 0) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     }
//     if (numTicket === 0 || numTicket >= 36) {
//         return 'Таких мест в вагоне не существует';
//     }
//     return Math.ceil(numCoupe);
// }

// getCoupeNumber();

// console.log(getCoupeNumber(0));

// let area;
// let volume;

// function calculateVolumeAndArea(length) {
//     area = length * length * 6;
//     volume = length * length * length;
//     if (!Number.isInteger(length) || length <= 0 || length == 'string') {
//         return 'При вычислении произошла ошибка';
//     }
//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea();

// console.log(calculateVolumeAndArea(4));

// console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
    


/* 29 lesson */

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '');
//         const b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 && !isNaN(b)) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectedPersonalLevel() {
//     if (personalMovieDB.count <= 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('error');
//     }
// }

// detectedPersonalLevel();

// /* My code */
// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// /* Code by Ivan */

// // function showMyDB(hidden) {
// //     if (!hidden) {
// //         console.log(personalMovieDB);
// //     }
// // }

// showMyDB();

// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр ${i + 1}`);
//     }
// }

// writeYourGenres();

// // console.log(personalMovieDB);





// function randomInteger(min, max) {
//     return Math.round(min + Math.random() * (max - min));
// }

// alert(randomInteger(1, 7));

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// let randNum = random(1, 3);

// alert(randNum);

// randNum = Math.trunc(randNum);

// alert(randNum);

// let num = +prompt('Введите число', '');

// function readNumber() {
//     while (typeof num != 'number') {
//         num = prompt('Введите число', '');
//     }
//     if (num == '' || num == null) {
//         return null;
//     }
//     return +num;
// }

// readNumber();
// console.log(readNumber());


// let num = prompt('To Number', '');
// function readNumber() {
//     while (Number.isNaN(+num)) {  
//       num = prompt('Number', '');  
//     }
//     if (!num) {                           //!num = !undefined, !null, !false, !0, !'' Boolean(num)
//         return null;
//     }
//     return +num;
// }

// console.log(readNumber());


// let a = +prompt('1 num', '');
// let b = +prompt('2 num', '');
// alert(a + b);


// console.log(9999999999999999);


// function checkSpam(spam) {
//     let lowerStr = spam.toLowerCase();
// //     if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
// //         console.log('true');
// //         return;
// //     } else {
// //         console.log('false');
// //         return false;
// //     }

//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// alert(checkSpam('viagra'));
// alert(checkSpam('fj fjf jfjfj'));
// alert(checkSpam('xxx'));

// let check = checkSpam();

// console.log(check());
// console.log(check('xxx'));
// console.log(check('fjfjfjff'));


// function ucFirst(name) {
//     if (!name) {
//       return name;
//     }
//         console.log(name[0].toUpperCase() + name.slice(1));
//         return name[0].toUpperCase() + name.slice(1);
// }

// let user = ucFirst('vasya');
// console.log(user);


// let str = "Widget with id";

// if (~str.indexOf("Widget")) {
//     alert("Совпадение есть"); // не работает
// }


// function sayHello(name) {
//     return (`Привет,${name}!`);
// }

// const a = sayHello('Anton');
// console.log(a);

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//     return amount * curr;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);


// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//     console.log(amount * curr);
//     // let a = convert();
//     if (amount >= 500) {
//         let a = (curr * discount);
//         console.log('Сумма со скидкой ' + a * amount);
//     }
// }

// convert(500, usdCurr);
// convert(500, eurCurr);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// data.reverse();

 
// for (let i = 0; i <= data.length - 1; i++) {
//     let a = data[i];
//     result[i] = a;
// }
// console.log(result);

// for (let i = 0; i <= data.length -1; i++) {
//     if (typeof data[i] === 'number') {
//         data[i] *= 2;
//     }
//     if (typeof data[i] === 'string') {
//         data[i] += '- done';
//     }
// }
// console.log(data);


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i <= arr.length -1; i++) {
//     for (let j = 0; j <=i; j++) {
//         result[i] = arr[i];

//     }
// }
// console.log(result);

// const arr = [];

// for (let i = 0; i <= 5; i++) {
//     arr[i] = i + 5;
// }
// console.log(arr);


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let num = 2;

// while (num < 16) {
//     num++;
//     if (num % 2 != 0) {
//         console.log(num);
//     }
// }


// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 20; i >= 10; i--) {
//     console.log(i);
//     if (i === 13) break;
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }


// console.log( 1 && 2 && 3 );
// console.log( NaN && 2 && undefined );
// console.log( NaN || 2 || undefined );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }



// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let johnReport, samReport, alexReport, mariaReport = 'done';

// if (johnReport || samReport || alexReport || mariaReport) {
//     console.log('done');
// }

// console.log(johnReport || samReport || alexReport || mariaReport);

// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

// console.log(hamburger || cola || fries);

// const num = 50;

// if (num < 50) {
//     console.log('Malo');
// } else if (num > 50) {
//     console.log('Mnogo');
// } else {
//     console.log('Ok');
// }


/* learn JS */

// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
  
  
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }
// console.log(multiplyNumeric());
// multiplyNumeric(menu);
// alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );



// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// };

// function multiplyNumberic(obj) {
//     for (let key in menu) {
//         if ( typeof(menu[key]) === Number) {
//             menu[key] *= 2;
//             console.log(menu);
//         }
//     }
// }
// let newmenu = multiplyNumberic();
// alert(newmenu);


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;

// for (let key in salaries) {
//     sum += salaries[key];
// }

// // let sum = salaries.John + salaries.Ann + salaries.Pete;
// alert(sum);

// let obj = {
//     // name: 'name',
//     // age: 'age',
// };
// function isEmpty(obj) {
//     for (let key in obj) {
//        return false;
//     }
//     return true;
// }

// alert(isEmpty(obj));

// let user = {};

// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';

// delete user.name;

// for (let key in user) {
//     alert(user.key);
//     alert(user[key]);
//     alert(user.name);
//     alert(user[name]);
// }

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("Что вы хотите узнать о пользователе?", "name");
  
//   // доступ к свойству через переменную
//   alert( user[key] );

// function sayHiBye(firstName, lastName) {

//     // функция-помощник, которую мы используем ниже
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     alert( "Hello, " + getFullName() );
//     alert( "Bye, " + getFullName() );
  
//   }

// sayHiBye('alex', 'fan');

// let nam = 'john';

// say();
// function say () {
//     alert("hi, " + nam);
// }

// nam = 'pete';

// say();



/* 25, 26, 27 lessons (exercises) */


// function returnNeighboringNumbers(number) {
//    return [number - 1, number, number + 1];
// }

// returnNeighboringNumbers(5);

// function getMathResult(base, count) {
//     let result = base + '';
//     if (typeof count != 'number' || count <= 0) {
//         return base;
//     }
//     for (let i = 2; i <= count; i++) {
//         result +=  '---' + base * i;
//     }
//     console.log(result);
//     return result;
// }

// getMathResult(5, 3);

// function sayHello(name) {
//     let a = 'Привет,';
//     let b = '!';
//     console.log(a + name + b);
//     return a + name + b;
// }

// sayHello('Антон');


// function showMessage(from, text) { // аргументы: from, text
//     return(from + ': ' + text);
//   }
  
//   showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
//   showMessage('Аня', "Как дела?");


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


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
// if (personalMovieDB.count <= 10) {
//     console.log('мало');
// } else if (personalMovieDB.count  > 10 && personalMovieDB.count <= 30) {
//     console.log('norm');
// } else if (personalMovieDB.count > 30) {
//     console.log('cool');
// } else {
//     console.log('error');
// }

// console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done!');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count <= 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('error');
// }

// // for (let i = personalMovieDB.count; i <= 10;) {
// //     console.log('Просмотрено довольно мало фильмов');
// //     for (let j = personalMovieDB.count; (j> 10) && (j<= 30); ) {
// //         console.log('Вы классический зритель');
// //         for (let k = personalMovieDB.count; k >30;) {
// //             console.log('Вы киноман');
// //         }
// //     }
// // }

// // while (personalMovieDB.count <=10) {
// //     console.log('Просмотрено довольно мало фильмов');
// //     break;
// // }
// // while ((personalMovieDB.count > 10) && (personalMovieDB.count <=30)) {
// //     console.log('Вы классический зритель');
// //     break;
// // }
// // while (personalMovieDB.count > 30) {
// //     console.log('Вы киноман');
// //     break;
// // }


// console.log(personalMovieDB);





/* lesson 23 */

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
    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // data.reverse();

    // for (let i = 0; i < data.length; i++) {
    //     let a = data [i];
    //     result [i] = a;
    // }
    // console.log(result);



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


/* lesson 22 */
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