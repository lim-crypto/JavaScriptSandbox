const posts = [
    { title: 'post one', body:'this is post one'},
    { title: 'post one', body:'this is post one'}

];


function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = true; //didnt explain
            if(!error){
                resolve();
            }else {
                reject('error: something went wrong');
            }
        },2000);
    });
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000)

}

createPost({title:'post three', body:'this is post three'})
.then(getPosts)
.catch(function(err){
    console.log(err);
});

