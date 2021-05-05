let a , b ;

[a,b] = [100,200];
// rest pattern
[a,b,c, ...rest] = [100,200,300,400,500];


// console.log(a);// 100
// console.log(b); // 200
// console.log(c); // 300

// console.log(rest); //  400,500



({a,b} = {a : 100 , b:200, c:300, d:400, e:500} );
({a,b, ...rest} = {a : 100 , b:200, c:300, d:400, e:500} );
// console.log(rest);

// Array Destructuring


// const people = ['john', 'beth' , 'asdasd' ];

// const [ person1 , person2 , person3] = people;

// console.log(person1); // john

// parse array returned from function

// function getPeople(){
//     return ['john', 'beth' , 'asdasd' ];
// }
// let person1 , person2 , person3;
// [person1 , person2 , person3] = getPeople();

// console.log(person1 , person2 , person3);


// object destructuring
const person ={
    name:'john',
    age:21,
    city:'asdasd',
    gender:'male'
}

// old es5

// const name =person.name,
//         age = person.age,
//         city= person.city;

// new es6
const {name , age , city} = person;
console.log(name , age , city);
















//