'use strict';
console.log('Hi Borys! You are cool!');

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log(!1 && 2 || !3);

// console.log(25 || null && !3);

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || null && !3 && undefined || 5);

// console.log(5 === 5 && 3 > 1 || 5);

// console.log(null);


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
//    console.log('Done!');
// }
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!');
// } else {
//     console.log("Not Done!");
// }


// let result = '';
// const a = 7;

// for (let i = 1; i < a; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// for (let i = 1; i <= a; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 20; i > 9; i--) {
//     if (i == 13) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 != 0) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 2; i <= 10; i = i + 2) {
//     console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }

// }


// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// const arrayOfNumbers = [];
// let j = 0;
// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[j] = i;
//     j++;
// }
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (i = 0; i < 5; i++) {
//     if (typeof (data[i]) == 'string') {
//         data[i] += ' - done';
//     } else {
//         data[i] = data[i] * 2;
//     }
// }
// console.log(data);


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof (data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof (data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }

// console.log(data);


// console.log(typeof(data[2]));


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// let j = data.length;
// for (i = 0; i < data.length; i++) {
//     result[i] = data[j-1];
//     j--;
// }
// console.log(result);


const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++) {
    for (let k = 0; k <=lines - i; k++) {
        result += ' ';
    }
    for (let j = 0; j < 2*i+1; j++) {
        result = result + '*';
    }
    result += '\n';
}
console.log(result);