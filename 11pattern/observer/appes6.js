class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    } 

    unsubscribe(fn){
        this.observers = this.observers.filter(function(item){
            if(item !== fn  ){
                return item;
            }
        });
        console.log(`you are now unsubscribed from ${fn.name}`);
    }
    
    fire(){
        this.observers.forEach(function(item){
            item.call();
        })
    }
}
 

const click = new EventObserver();

// Event listners

document.querySelector('.sub-ms').addEventListener( 'click', 
function(){
click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener( 'click', 
function(){
click.unsubscribe(getCurMilliseconds);
});
document.querySelector('.fire').addEventListener( 'click', 
function(){
click.fire();
});
// click handler
const getCurMilliseconds = function(){
    console.log(`Current Milliseconds ${new Date().getMilliseconds()}`);
}












//