// person constructor

function Person(name,dob){
    this.name= name;
    // this.age=age;
    this.birthday= new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now()-this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);

    }
    // console.log(this);
}
// const newname = new Person('lim',20);
// const newname2 = new Person('asdad',21);

const lim = new Person('lim', '5-8-2000');
console.log(lim.calculateAge());











