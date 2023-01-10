'use strict';


/* 10 самостоятельно */

const personalPlanPeter = {
    name: "Peter",
    age: "30",
    skills: {
        languages: ['ru', 'eng', 'fr'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '3 month'
    },
    showAgeAndLangs: () => {           /*  showAgeAndLangs() { ..... } тоже работает. ПОЧЕМУ???*/
        let result = '';
        const languages = personalPlanPeter.skills;
        return `Мне ${personalPlanPeter.age} лет и я владею языками ${languages.languages.join().toUpperCase()}`;
    }
};

function showExperience(plan) {
    return personalPlanPeter.skills.exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let result = '';
    const langProgramming = personalPlanPeter.skills.programmingLangs;
    const languages = Object.keys(langProgramming);

    for (let key in langProgramming) {
        result += `Язык ${key} изучен на ${langProgramming[key]} \n`;
    }
    if (languages.length === 0) {
        return 'lll';
    }
    return result;
}

showProgrammingLangs(personalPlanPeter);

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

console.log(showExperience());
console.log(showProgrammingLangs());
console.log(personalPlanPeter.showAgeAndLangs());




/* Задание 10 подсматривал в предыдущем решении */

// const personalPlanPeter = {
//     name: "Peter",
//     age: "30",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '30%'
//         },
//         exp: '3 month'
//     },
//     showAgeAndLangs: function() {
//         const showLangs = personalPlanPeter.skills.languages;
//         const languages = Object.keys(showLangs);
//         let result = `Мне ${personalPlanPeter.age} и я владею языками: `;

//         for (let i = 0; i < languages.length; i++) {
//             result += `${showLangs[languages[i]].toUpperCase()} `;
//         }
//         return result;
//     }
// };

// function showExperience(obj) {
//     return personalPlanPeter.skills.exp;
// }

// function showProgrammingLangs(obj) {
//     const programmingLangs = personalPlanPeter.skills.programmingLangs;
//     const languages = Object.keys(programmingLangs);
//     let result = '';
//     if (languages.length === 0) {
//         return '';
//     }
//     for (let i = 0; i <= languages.length - 1; i++) {
//         result += `Язык ${languages[i]} изучен на ${programmingLangs[languages[i]]}\n`;
//     }
//     return result;
// }

// showExperience(personalPlanPeter);
// showProgrammingLangs(personalPlanPeter);
// personalPlanPeter.showAgeAndLangs();

// console.log(personalPlanPeter.showAgeAndLangs());
// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));






/* 9 Fibonachi */

// function fib(fibLen) {
//     const fibArr = [0, 1];
//     if (!Number.isInteger(fibLen) || fibLen < 0) {
//         return '';
//     }
//     if (fibLen < 3) {
//         return fibArr.slice(0, fibLen).join(' ');
//     }
//     while (fibLen != fibArr.length) {
//         fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
//     }
//     return fibArr.join(' ');
// }

// console.log(fib(4));
// console.log(fib(8));
// console.log(fib(14));

/* 8-2 */

// function findMaxNumber(a, b, c, d) {
//     if (arguments.length < 4) {
//         return 0;
//     }
//     for (let i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] != 'number') {
//             return 0;
//         }
//     }
//     return Math.max(...arguments);
// }

// console.log(findMaxNumber(1, 2, 4, 7.8));
// console.log(findMaxNumber(-1, '2', 4, 7));
// console.log(findMaxNumber(13, 24, 34, 17));
// console.log(findMaxNumber(1, 2, 4));

/* 8-1 */

// function getTimeFromMinutes(minutes) {
//     if (!Number.isInteger(minutes) || minutes < 0 || isNaN(minutes)) {
//         return 'Ошибка, проверьте данные';
//     }
//     let hours = Math.floor(minutes / 60);
//     let minute = minutes % 60;
//     if (hours >= 5 || hours == 0) {
//         return `Это ${hours} часов и ${minute} минут`;
//     } else if (hours > 1 && hours < 5) {
//         return `Это ${hours} часа и ${minute} минут`;
//     } else if (hours == 1) {
//         return `Это ${hours} час и ${minute} минут`;
//     }
// }

// console.log(getTimeFromMinutes(33));

/* 7-2 */

// function getCoupeNumber(numTicket) {
//     if (numTicket < 0 || !Number.isInteger(numTicket) || numTicket == 'string') {
//         return `Ошибка. Проверьте правильность введенного номера`;
//     } else if (numTicket === 0 || numTicket > 36) {
//         return `Таких мест в вагоне не существует`;
//     }
//     return Math.ceil(numTicket / 4);
// }

// console.log(getCoupeNumber(6));

/* 7-1 */

// let value;
// let square;

// function calculateVolumeAndArea(lenght) {
//     value = lenght * lenght * lenght;
//     square = 6 * (lenght * lenght);
//     if (!Number.isInteger(lenght) || lenght <= 0 || lenght == 'string') {
//         return 'При вычислении произошла ошибка';
//     }
//     return `Объем куба: ${value}, площадь всей поверхности: ${square}`;
// }

// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea(15.9));
// console.log(calculateVolumeAndArea(-53));
// console.log(calculateVolumeAndArea('25'));





// /* Треугольник из звездочек */
// const lines = 7;
// let result = '';

// for (let i = 1; i < lines; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);




// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = lines; j >= i; j--) {
//         result += ' ';
//     }
//     for (let k = 0; k <= i; k++) {
//         result += '*';
//         if (k > 0) {
//             result += '*';
//         }
//     }
//     result += '\n';
// }

// console.log(result);




/* 
let result = '';
let lenght = 7;

for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result); */





// FizzBuzz

// let num = 0;

// for (let i = 0; i < 100; i++) {
//     num ++;
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log('FizzBuzz');
//         continue;
//     }
//     if (num % 3 == 0) {
//         console.log('Fizz');
//         continue;
//     }
//     if (num % 5 == 0) {
//         console.log('Buzz');
//         continue;
//     }
//     console.log(num);
// }



// треугольник

// let result = '';
// let lenght = 7;

// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);



// // шахматная доска                                   /* ?????????????????????????? */

// let results = '';
// let size = 8;

// for (let i = 1; i < size; i++) {

//     for (let j = 0; j < size / 2; j++ ) {
//         if (i % 2 != 0) {
//             results += ' ' + '#';
//         }
//         else {
//             results += '#' + ' ';
//         }
//     } 
//     results += '\n';
// }

// console.log(results);
