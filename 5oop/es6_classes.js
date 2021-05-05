class Person{
    constructor(firstName, lastName, dob  ){
        this.firstName=firstName;
        this.lastName=lastName; 
        this.birthday= new Date(dob);
    }
    greeting(){
        return `hello there ${this.firstName} ${this.lastName}`;
    }
    calculateAge(){
        const diff = Date.now()-this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
    getsMarried(newLastName){
        this.lastName=newLastName
    }

    static addNumbers(x,y){
        return x+y;
    }
}

const mary = new Person('mary', 'williams', '12-12-1999');
console.log(mary.calculateAge());
mary.getsMarried('thompson');
console.log(mary.greeting());
console.log(Person.addNumbers(1,2));






