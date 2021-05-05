// SETS - Store unique values of any type

const set1 = new Set();

// Add Values to set

set1.add(100);
set1.add('A string');
set1.add({name:'john'});
set1.add(true);

// console.log(set1);
// console.log(set1.size);

// console.log(set1.has(100)); // true
// console.log(set1.has(50+50)); // true

// console.log(set1.has({name:'john'}));// false

// console.log({name:'john'}==={name:'john'}); // false

//delete
set1.delete(100);


// iterating through sets
// for ... of 
for ( let item of set1){
    console.log(item);
}

// forEach loop
set1.forEach((value)=>{
    console.log(value);
})

// convert set to array

const setArr = Array.from(set1);
console.log(setArr);







//