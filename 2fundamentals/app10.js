const person ={
    firstName: 'steve',
    lastName:'smith',
    age:20,
    email: 'sasd@asd.asd',
    hobbies:['musics','sports'],
    address:{
        city:'miami',
        state:'fl'
    },
    getBirthYear:function(){
        return 2020 - this.age;
    }

}
let val;
val =person;

val=person.firstName;
val=person['firstName'];
val=person.age;
val=person.hobbies[1];
val=person.address.city;
val=person.getBirthYear();

console.log(val);

const people = [
    {name:'john', age:19},
    {name:'jane', age:17}

];
for(let i=0; i<people.length;i++){
    console.log(people[i].name);
}
