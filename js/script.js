"use strict";


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


/* my code +++ */
const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('Какую оценку ему дадите?', ''),
      e = prompt('Actors?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('Какую оценку ему дадите?', ''),
      f = prompt('Actors?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
personalMovieDB.actors [a] = e;
personalMovieDB.actors [c] = f;

console.log(personalMovieDB);

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