const http = new EasyHTTP; 
// get users
 http.get('https://jsonplaceholder.typicode.com/users')
 .then(data=>console.log(data))
 .catch(err =>console.log(err));

// user data
const data = { 
    email:'222222222a@asd.ac'
}
// create post
//  http.post('https://jsonplaceholder.typicode.com/users', data)
//  .then(data=>console.log(data))
//  .catch(err =>console.log(err));
 
// update
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data=>console.log(data))
.catch(err =>console.log(err));


// delete
http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data=>console.log(data))
.catch(err =>console.log(err));
http.get('https://jsonplaceholder.typicode.com/users/2')
.then(data=>console.log(data))
.catch(err =>console.log(err));
