// map = key-value pairs - can use any types as a key or value

const map1= new Map();

// set keys

const key1 = ' some string',
    key2 = {},
    key3 = function(){};

// set map values by key

map1.set(key1, 'a');
map1.set(key2, 'b');
map1.set(key3, 'c');

//get values by key

console.log(map1.get(key1)); // a
console.log(map1.get(key2)); // b
console.log(map1.get(key3)); // c


// coount the values

console.log(map1.size);

// iterating maps
    //loop using    for ... of to get key and values
    // for( let[key , value ] of map1 ){
    //     console.log(`${key} = ${value}`);
    // }
    // //iterate keys only
    // for( let key of map1.keys()){
    //     console.log(key);
    // }
    // // iterate value only 
    // for( let value of map1.values()){
    //     console.log(value);
    // }

    // loop using foreach
    map1.forEach(function(value , key){
        console.log(`${key} = ${value}`);

    });

// convert to arrays
    // create an array of the key value pairs
    const keyValArr = Array.from(map1);
    console.log(keyValArr);

    const  ValArr = Array.from(map1.values());
    console.log(ValArr);

    const keyArr = Array.from(map1.keys());
    console.log(keyArr);














    //