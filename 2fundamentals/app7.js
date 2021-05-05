const firstName='jerald';
const lastName='lim';
const age=20; 
const str = "hello there my name is lim"
let val;
val = firstName+lastName;
//concatination
val = firstName+' '+lastName;
//append
val ="wang ";
val+="yu";


val = 'hello, my name is ' + firstName+' and I am ' + age;

val= "that's ";
val = firstName.length;

val =firstName.concat(' ', lastName);
val =firstName.toUpperCase();
val =firstName.toLowerCase();
val =firstName[0];
val =firstName.indexOf('j');
val =firstName.lastIndexOf('j');
val =firstName.charAt('0');
val =firstName.charAt(firstName.length -1);
val =firstName.substring(0,4);
val =firstName.slice(0,4);
val =firstName.slice(-3);
val =str.split(" ");


val = str.replace('lim', 'wangyu');
console.log(val);