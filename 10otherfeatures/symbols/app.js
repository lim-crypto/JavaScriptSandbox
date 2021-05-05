// // create symbol

// const sym = Symbol();
// const sym2 = Symbol('sym2');

// // console.log(typeof sym2);


// console.log(Symbol('123') === Symbol('123'));   // false

// unique object keys
const key1 =Symbol();

const key2 = Symbol('sym2');

const myObj = {};

myObj[key1] = 'Prop1';
myObj[key2] = 'Prop2';

console.log(myObj[key1]);











//