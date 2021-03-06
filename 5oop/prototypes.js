// object prototype


//person constructor
function Person(firstName,lastName,dob){
    this.firstName= firstName;
    this.lastName= lastName; 
    this.birthday= new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now()-this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear()-1970);
    // }
}

//calculate age 
Person.prototype.calculateAge=function(){
    const diff = Date.now()-this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
}
// get fullname
Person.prototype.getFullName=function(){
    return `${this.firstName} ${this.lastName}`;
}
//get merried
Person.prototype.getsMarried=function(newLastName){
    this.lastName=newLastName;
}

const john = new Person('john','doe', '8-12-90');
const mary = new Person('mary', 'johnson', 'march 20 1978')

console.log(mary.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());
console.log(mary.hasOwnProperty('firstName'));// true
console.log(mary.hasOwnProperty('getFullName'));// false


















