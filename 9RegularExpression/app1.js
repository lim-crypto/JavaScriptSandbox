let re;
re = /hello/;

// console.log(re); // /hello/
// console.log(re.source); //  hello


//exec() - return result in an array or null
// const result = re.exec('hello world');
// console.log(result); // ["hello", index: 0, input: "hello world"]
// console.log(result[0]); // hello
// console.log(result.index); // 0
// console.log(result.input); // hello world  


// test() - return true or false
// const result = re.test('hello'); // true
// const result = re.test('Hello'); // false 
re = /hello/i; // i = case insensitive
// const result = re.test('Hello'); // true
// console.log(result);

// // match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re); // ["Hello", index: 0, input: "Hello world"]

// search() - return index of the first match if not found return -1
// const str = 'Heloo There';
// const result = str.search(re);
// console.log(result); // 0 

// replace() - return new string with some or all matches of a pattern

const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);




















//
//