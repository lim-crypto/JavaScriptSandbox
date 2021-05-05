// iterator
// function nameIterator(names){
//     let nextIndex = 0;

//     return {
//         next: function(){
//             return nextIndex < names.length  ? 
//             {value : names[nextIndex++],done:false}:
//             {done: true}
//         }
//     }
// }
// const namesArr = ['jack', 'jill', 'john'];
// const names = nameIterator(namesArr);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);



// genarator

// function* sayNames(){
//     yield 'jack';
//     yield 'jill';
//     yield 'john';  
// } 

// const names = sayNames(); 
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


// ID Creator

function* createIds(){
    let index = 0;

    while(true){
        yield index++;
    }
}
const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);







//