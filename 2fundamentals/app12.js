// if(true){
// console.log(1);
// }else{
//     console.log(0);
// }

const id=100;
//equal
// if(id==100){
//     console.log(1+ ' correct');
// }else{
//     console.log(0+ ' incorrect');
// }

// // not equal
// if(id!=200){
//     console.log(1+ ' correct');
// }else{
//     console.log(0+ ' incorrect');
// }
// // equal to value and type
// if(id==='100'){
//     console.log(1+ ' correct');
// }else{
//     console.log(0+ ' incorrect');
// }
// if(id===100){
//     console.log(1+ ' correct');
// }else{
//     console.log(0+ ' incorrect');
// }

// // not equal of value andd type

// if(id!=='100'){
//     console.log(1+ ' correct');
// }else{
//     console.log(0+ ' incorrect');
// }
// if(id!==100){
//     console.log(1+ ' correct');
// }else{
//     console.log(0+ ' incorrect');
// }




// test if undefined
// if(typeof id != 'undefined'){
//     console.log(`the id ${id}`);
// }else{
//     console.log('no id');
// }


//greater or lessthan
// if(id >= 100){
//     console.log(1+ ' correct');
// }else{
//     console.log(0+ ' incorrect');
// }

// if else

const color="yellow";

// if (color === 'red'){
//     console.log('color is red');
// }else if(color==='blue'){
//     console.log('color is blue');
// }else{
//     console.log('color is not red or blue');
// }

const name = 'steve';
const age = 20;

// AND &&
if(age>0 && age<12){
    console.log(`${name} is a child`);
}else if(age>=13 && age<=19){
    console.log(`${name} is teenager `);
}else{
    console.log(`${name} is an adult `);
}

// OR ||

if(age <16 || age>65){
    console.log(`${name} cant run in race`);
}else {
    console.log(`${name} is registered for a race`);
}


// ternary operator
console.log(id===100 ? 'correct':'incorrect');

if(id===100) 
console.log('correct1');
else
console.log('incorrect');