//Задача 1

/*
let x = +prompt ('Введите число');
if (typeof x === 'number' && !isNaN(x)) {
    if (x === 0) {
        console.log ('Ноль');
    }   else if (x % 2 == 0) {
        console.log ('Число четное');
    }   else {
        console.log ('Число нечетное');
    }
}   else {
    console.log('Упс, кажется, вы ошиблись');
}
*/

//Задача 2

/*
let x;
let type = typeof x;

if (type === 'number') {
    console.log('x - число');
}   else if (type === 'string') {
    console.log('x - строка');
}   else if (type === 'boolean') {
    console.log('x - логический тип');
}   else {
    console.log('Тип x не определен');
}
*/

//Задача 3
/*
let string = 'Hello'
let stringReverse = string.split('').reverse('').join('')
console.log (stringReverse)
*/

//Задача 4
/*
let x = Math.floor(Math.random() * 101)
console.log (x)
*/

//Задача 5
/*
let arr = [1, 2, 3]
console.log (arr.length)


let arr2 = arr.map((item) => item)
console.log(arr2)
*/

//Задача 6
/*
const array = [1, 1, 3, 3, 4];
let equals = true;
for (let i=0; i < array.length - 1; i++) {
  if (array[i] !== array[i+1]) {
    equals = false;
  }
}
console.log(equals)
*/

//Задача 7
/*
const arrayTwo = [3, 9, 2, 0, 88, null]
let even = 0
let odd = 0
let nothing = 0
let x = null
for (let i = 0; i < arrayTwo.length - 1; i++) {
  if (arrayTwo[i] === 0) {
    nothing += 1
  } else if (arrayTwo[i] %2 === 0) {
    even += 1
  } else if (arrayTwo[i] %2 !== 0) {
    odd += 1
  } else if (arrayTwo[i] %2 !== 0) {
    x += 1
  }
}
console.log(`В массиве ${nothing} ноль, ${even} четных и ${odd} нечетных числа, а также знак ${x}`)
*/

//Задача 8

let myMap = new Map();
myMap.set('Пароль', 123);
myMap.set('дата', '230289');
myMap.set(true, 1242);
myMap.set(12, false);

for (let name of myMap) {
  console.log(`Ключ - ${name[0]}, значение - ${name[1]}`);  
}