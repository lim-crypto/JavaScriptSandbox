let val;
const today=new Date();
let birthday = new Date('9-10-1981 11:25:00');
 birthday = new Date('September 10 1981');
 birthday = new Date('9/10/1981');
// val= birthday;
 
val=today.getMonth();
val=today.getDate();
val=today.getDay();
val=today.getFullYear();
val=today.getHours();
val=today.getMinutes();
val=today.getSeconds();
val=today.getMilliseconds();
val=today.getTime();
val=today.toISOString()
val=today.getHours();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(2005);
// birthday.setHours(12);
// birthday.setMinutes(22);


console.log(val);
// console.log(birthday);
// console.log(typeof val);