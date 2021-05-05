const numbers=[43,56,33,23,44,36,5];
const numbers2=new Array(22,45,33,76,45);
const fruit=['apple','banana','orange','pear'];
const mixed=[22,'hello', true, undefined,null,{a:1,b:1},new Date()];

// console.log(typeof mixed);

let val;
val=numbers.length;
val= Array.isArray(numbers);

val=numbers[3];
val=numbers[0];
//insert into array
numbers[2]=100;
// find index of value
val = numbers.indexOf(36);
//add to end of array
numbers.push(250);
//add to front of array
numbers.unshift(120);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
console.log(numbers);

//splice value;
numbers.splice(1,1)
//reverse
numbers.reverse();
val=numbers.concat(numbers2);
 val=fruit.sort();
//  val=numbers.sort();
val=numbers.sort(function(x,y){
    return x-y;
});
val=numbers.sort(function(x,y){
    return  y-x;
});

function under50(num){
    return num<50;
}

val=numbers.find(under50);
console.log(numbers);
console.log(val);



