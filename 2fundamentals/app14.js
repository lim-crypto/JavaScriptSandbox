// function declarations

function greet(firstName ='john', lastName='doe'){
// if(typeof firstName==='undefined'){firstName='john'}
// if(typeof lastName==='undefined'){lastName='doe'}

    // console.log('hello');
    return 'hello '+firstName +' '+ lastName;
}
console.log(greet('jerald','lim'));
// console.log(greet());

// Function expressions

const square = function(x=0){
    return x*x;
};
console.log(square());

// immidiately invokable function expression
// (function(){
//     console.log('iife run...');
// })();
(function(name){
    console.log('hello ' + name);
})('jerald');



// property methods
const todo={
    add: function(){
        console.log('add todo..');
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    }
}

todo.delete=function(){
    console.log('delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();





