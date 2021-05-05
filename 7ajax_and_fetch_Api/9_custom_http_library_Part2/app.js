const http = new easyHTTP;
//getpost 
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
  
// });


// get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
  
// });

// create data

const data = {
    title: 'custom post',
    body:'this is a custom post'
};

//create post
// http.post('https://jsonplaceholder.typicode.com/posts',
// data, function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

//update POST
// http.put('https://jsonplaceholder.typicode.com/posts/1',
// data, function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });


// delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
  
});

http.get('https://jsonplaceholder.typicode.com/posts',
function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
  
});