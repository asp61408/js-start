'use strict';


/* 7 kyu  7 kyu  7 kyu  7 kyu  7 kyu  7 kyu */

const arr = [1, 2, 3, 4, 5, -1, -2, -3];
const arr1 = [1, 2, 3, 4, 0, -1, -2, -3];
const arr2 = [];

function countPositivesSumNegatives(input) {
    let positive;
    let negative;
    let newArr = [];

    for (let value of input) {
        if (input.lengthzl === 0 || value === null) {
            return newArr;
        } else if (value < 0) {
            negative += value;
        } else {
            for (let i = 0; i <= input.length; i++) {
                let arrPos = [];
                arrPos.push(i);
                positive = arrPos.length;

            }
        }
        newArr = [positive, negative];
    }
    return newArr;
    
    // let positive;
    // let negative;
    // let newArr = [];
    // if (input.length == 0) {
    //     return newArr;
    // }
    // let arrWithNum = input.forEach(number => {
    // for (let i = 0; i < input.length; i++) {
    //     if (number > 0) {
    //         positive = input.length;
    //     } else if (number < 0) {
    //         negative += number;
    //     }
    // }
    // return arrWithNum += [positive, negative];
    // });

    // let arrNeg = input.forEach(number => number < 0);

    // for (let value of arrNeg) {
    //     negative += value;
    // }
    // if (input.length == 0) {
    //     return newArr;
    // }
}

console.log(countPositivesSumNegatives(arr));
console.log(countPositivesSumNegatives(arr1));
console.log(countPositivesSumNegatives(arr2));


// function getMiddles(str) {
//     let middleSimb = '';
//     let strSimb = str.length / 2;
//     // return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);     /* Codewars */
//     // return str.slice((str.length - 1) / 2, str.length / 2 + 1);      /* Кодварс- str.slice(с какого, по какой) */
//     if (str.length % 2 != 0) {
//         return middleSimb += str.substring(Math.floor(strSimb), Math.floor(strSimb) + 1);
//     } else {
//         return middleSimb += str.substring(Math.floor(strSimb) - 1, Math.floor(strSimb) + 1);
//     }
// }

// console.log(getMiddles("test"));
// console.log(getMiddles("testing"));
// console.log(getMiddles("middle"));








// const sqrt = 784;
// let nextSqrt = sqrt + 1;

// function findNextSquare(x) {
    
//     if (!Number.isInteger(Math.sqrt(x))) {
//         return -1;
//     } else {
//         while (!Number.isInteger(Math.sqrt(nextSqrt))) {
//             nextSqrt++;
//         }
//     }
//     return nextSqrt;
// }

// console.log(findNextSquare(sqrt));


// // const sq = 676;

// function findNextSquare(sq) {
//     // let nextSq;
//     let sqMath = Math.sqrt(sq);
//     if (!Number.isInteger(Math.sqrt(sq))) {
//         return -1;
//     } else {
//         sqMath += 1;
//     }
//     return sqMath * sqMath;
// }

// console.log(findNextSquare(729))



// function findNextSquare(sq) {
//     return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }

// console.log(findNextSquare(625));
// console.log(findNextSquare(624));




/* Code from Codewars */

// function boolToWord( bool ){
//     return bool ? 'Yes':'No';
// }


/* My code */

// function boolToWord(bool) {
//     if (bool == 0) return 'No';
//     if (bool != 0) return 'Yes';
// }




/* 8 kyu  8 kyu  8 kyu  8 kyu  8 kyu  8 kyu */


/* Code from Codewars */

// function maps(x){
    // return x.map(n => n * 2);
// }

// maps = x => x.map(e => e * 2);




/* My code in Codewars */

// const arr = [1, 2, 3];

// function maps(x) {
//     let newArr = x.map(item => {
//         return item * 2;
//     });
//     return newArr;
// }

// maps(arr);


/* My code in VSCode */

// const arr = [1, 2, 3];
// let newArr = [];

// function maps(x) {
//     newArr = x.map((item) => {
//         return item * 2;
//     });
// }
// maps(arr);

// console.log(newArr);





// const arr = [1, 2, 3, 4],
//       x = 3;
// // let result;


// /* Desicion on Codewars !!! */

// const check = (a, x) => a.includes(x) > -1 ? true : false;


/* It's me ((())) */

// function check(a, x) {
//     for (let value of a) {
//         // result = (value === x) ? true : false;
//         // console.log(result);
//         if (value == x) {
//             return true;
//         }
//     }
//     return false;
//     // for (let i = 0; i < a.length; i++) {
//     //     result += a[i];
//     //     if (a[result] == x) {
//     //         return true;
//     //     } else {
//     //         return false;
//     //     }
//     // }
// }

// console.log(check(arr, x));
// // console.log(result);



// const n = 35231;

// function digitized(n) {
//     let myFunc = num => Number(num);
//     let arr = Array.from(String(n), myFunc);
//     return arr.reverse();
// }
// console.log(digitized(n));


