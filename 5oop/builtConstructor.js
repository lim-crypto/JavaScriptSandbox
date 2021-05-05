// string
const name1 = 'lim';
const name2= new String('lim');
const name3= new String('lim');

name2.foo = 'bar';
console.log(name2);

console.log(typeof name2);

if(name2===name3){
    console.log('yes');
}else{
    console.log('no');
}

// number
const num1 = 5;
const num2 = new Number(5);
// console.log(num2);
// console.log(typeof num2); //object


//boolean
const bool1 =true;
const bool2 = new Boolean(true);
//   console.log(bool2);
//  console.log(typeof bool2);

//function
const getSum1 = function(x,y){
    return x+y;
}
const getSum2 = new Function('x','y','return x+y')
// console.log(getSum2(1,2));

//object
const john = {name:"john"};
const john2 = new Object({name:"john"});
// console.log(john2);

const arr1=[1,2,3,4];
const arr2= new Array(1,2,3,4);
console.log(arr2);

// regular expression 

const reg1 = /\w+/;  // mean looking for word character that occur 1 or more times
const reg2 = new RegExp('\\w+');
console.log(reg1);















