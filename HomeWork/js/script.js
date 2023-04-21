//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

/* const fruts = [
    { id: 0, name: "Apple" },
    { id: 1, name: "Tomat" },
    { id: 2, name: "Cherry" },
    { id: 3, name: "Orange" },
 ];
for (let key in fruts) {
    console.log(fruts[key]); 
}
*/

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

/*
for (let a = 1; a <= 10; a++) {
    if (a % 2 == 1) continue
    console.log(a);
}
*/

//  -- 3 --
//Замініть цикл "for" на "while"

/* for (let i = 0; i < 5; i++) {
  console.log( `цифра ${i}!` );
}

let a = 0;
while (a < 5) {
    console.log(`цифра ${a}!`);
    a++;
} */

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

/* let num;
do {
  num = prompt("Ввеliть число бiльше нiж 100.");
} while (num <= 100 && num); */


//  -- 5 --
// Вирахуйте середній вік

/* const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
 ];

 let arr = [23, 29, 10, 20];
let summ = arr.reduce((summ, item) => summ + item) / arr.length;
console.log(summ); // 20.5
*/