'use strict';

/* #2 IvanP */ 


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('Ваша оценка:', '');
        if (a != '' && b != '' && a.length < 50 && a != null && b != null && !isNaN(b)) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectedPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр ${i + 1}`);
    }
}

writeYourGenres();
























/* function rememberMyFilms()   v.2 */

// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('Ваша оценка:', '');
//     if (a != '' && b != '' && a.length < 50 && a != null && b != null) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//     } else {
//     console.log('error');
//     i--;
//     }
// }








/* lesson 19 Practice*/
/*
1. Создать переменную numberOfFilms и в нее
 поместить ответ от пользователя на вопрос:
 "Сколько фильмов вы уже посмотрели?"
 
2. Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ не первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
    
3. Задайте пользователю по 2 раза вопросы:
    - "Один из последних просмотренных фильмов?"
    - "На сколько оцените его?"
 Ответы стоит поместить в отдельные переменные
 Записать ответы в объект movies в формате:
    movies: {
          'logan: '8.1'
    }
*/

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



