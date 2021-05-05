// for loop

// for (let i=0; i<10; i++){
 
//     if (i==2){
//         console.log(i+' is my fav num.');
//         continue;
//     }

//     if(i==5){
//         console.log('stop the loop');
//         break;
//     }
//        console.log('number '+ i);
// }

 
// while loop

let i=0;

// while(i<10){
//     console.log('number '+i);
//     i++;
// }

do{
    console.log('number '+i);
    i++;
}
while(i<10);


//loop through array
const cars=['ford','toyota','honda','chevy'];
// for(let i=0; i<cars.length; i++){
//     console.log(cars[i]);
// }
//  foreach
cars.forEach(function(index, car){
    console.log(index , car); // ford  0
});
 for (let x in cars){
     console.log(x); // 0 1 2 3
 }
 for(let x of cars){
     console.log(x);// ford , toyota, ...
 }
//MAp
const users = [
    {id:1, name:'john'},
    {id:2, name:'karen'},
    {id:3, name:'jaane'}
];
const ids= users.map(function(user){
    return user.id +" "+ user.name;
});
console.log(ids);
const user ={
    firstName:'john',
    lastName:'doe',
    age:'22'
}
for (let x in user){
    console.log(x , user[x]);
}




