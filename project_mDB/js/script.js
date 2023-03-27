/* Задания на урок: 45

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



/* 
1) Реализовать функционал, чтобы после заполнения формы и нажатия кнопки "Подтвердить" новый фильм добавляется
в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies
Для получения доступа к зачению input обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 сивол - обрезать его и добавить 3 точки.

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильсмы должны быть отсортированы по алфавиту.
*/

'use strict';



/* 45, 48 */

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против...'
		]
	};

	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		addInput = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector('[type="checkbox"]');


	addForm.addEventListener('submit', (event) => {
		event.preventDefault();

		let newFilm = addInput.value;
		const favorite = checkbox.checked;
		
		if (newFilm) {
			
			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 21)}...`;
			}
			
			if (favorite) {
				console.log('Добавляем любимый фильм');
			}

			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);
			createMovieList(movieDB.movies, movieList);
		}

		event.target.reset();
	});

	const deleteAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	};

	const sortArr = (arr) => {
		arr.sort();
	};

	const makeChanges = () => {
		genre.textContent = 'драма';
		poster.style.backgroundImage = 'url("img/bg.jpg")';
	};

	function createMovieList(films, parent) {
		parent.innerHTML = '';
		sortArr(films);

		films.forEach((film, i) => {
			parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);

				createMovieList(films, parent);
			});
		});
	}

	makeChanges();
	deleteAdv(adv);
	createMovieList(movieDB.movies, movieList);

});




/* 46 */

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);

// console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName  == '#text' || node.nodeName == '#comment') {
//         continue;
//     }
//     console.log(node);
// }





/* 47 Рекурсия */


// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// function pow(x, n) {  debugger;
//     if (n === 1) {debugger;
//         return x;
//     } else { debugger;
//         return x * pow(x, n - 1);
//     }
// }

// pow(2, 1);   /* 2 */
// pow(2, 2);   /* 4 */
// pow(2, 3);   /* 8 */
// pow(2, 4);   /* 16 */


// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],
//         // semi: {
//         //     students: [{
//         //         name: 'test',
//         //         progress: 100
//         //     }]
//         // }
//     }
// };

// function getProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getProgressByIteration(students)); /* semi: {students: [{}]} не будет работать */


// function getProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }
//         return [total, data.length];
//     } else {
//         let total = [0, 0];
//         for (let subData of Object.values(data)) {
//             const subDataArr = getProgressByRecursion(subData);

//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getProgressByRecursion(students);

// console.log(result[0] / result[1]);