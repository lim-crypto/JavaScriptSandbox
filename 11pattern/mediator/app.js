const User = function(name){
    this.name = name ;
    this.chatroom=null;
}

User.prototype = {
    send:function(message, to ){
        this.chatroom.send(message, this, to);
    }, 
    receive: function(message, from){
        console.log(`${from.name} to  ${this.name}: ${message}`);
    }
}



const Chatroom = function(){
    let users = {}; // list of users
    return {
        register: function(user){
            users[user.name] =user;
            user.chatroom = this;
        },
        send: function(message, from ,to){
            if(to){
            // single message
                to.receive(message, from );

            } else{
                // mass message
                for(key in users){
                    if(users[key]!==from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }   
    }
}

const john = new User('john');
const jane= new User('jane');
const doe = new User('doe');


const chatroom = new Chatroom();

chatroom.register(john);
chatroom.register(jane);
chatroom.register(doe);

john.send('Hello jane', jane);






//