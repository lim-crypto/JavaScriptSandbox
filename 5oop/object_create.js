const personPrototypes = {
    greeting : function(){
        return `hello there ${this.firstName} ${this.lastName} `;

    },
    getsMarried: function(newLastName){
        this.lastName=newLastName;
    }
}

const mary= Object.create(personPrototypes);
mary.firstName='mary';
mary.lastName='william';
mary.age=22;

mary.getsMarried('thomson')

console.log(mary);
console.log(mary.greeting());

const lim= Object.create(personPrototypes,{
    firstName:{value:'jerald'},
    lastName:{value:'lim'},
    age:{value:20}
}); 
 
console.log(lim);
console.log(lim.greeting());









