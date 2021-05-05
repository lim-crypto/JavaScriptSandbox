import { http } from './http';
import { ui } from './ui';
// get post on doom load
document.addEventListener('DOMContentLoaded', getPosts)

//listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

//listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

//listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

//listen for cancel button
document.querySelector('.card-form').addEventListener('click', cancelEdit);



function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

// submit post
function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;

    const data = {
        title,
        body
    }

    //validate input
    if (title === '' || body === '') {
        ui.showAlert('please fill in all fields', 'alert alert-danger');
    } else {
        // check for id 
        if (id === '') {
            // create post   
            http.post('http://localhost:3000/posts', data)
                .then(data => {
                    ui.showAlert('posts added', 'alert alert-success');
                    ui.clearFields();
                    getPosts();
                })
                .catch(err => console.log(err))
        } else { 

            // update post
            http.put(`http://localhost:3000/posts/${id}`, data)
                .then(data => {
                    ui.showAlert('Posts update', 'alert alert-success'); 
                    ui.changeFormState('add');
                    getPosts();
                })
                .catch(err => console.log(err))
        }


    }
}

//delete post
function deletePost(e) {
    e.preventDefault();
    if (e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        console.log(id);
        if (confirm('are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    ui.showAlert('Post remove', 'alert alert-success');
                    getPosts();

                })
                .catch(err => console.log(err));
        }
    }
}

// enable edit state
function enableEdit(e) {
    e.preventDefault();

    if (e.target.parentElement.classList.contains('edit')) {
        const id = e.target.parentElement.dataset.id;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const body = e.target.parentElement.previousElementSibling.textContent;

        // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        const data = {
            id,
            title,
            body
        }

        //  fill form with current post
        ui.fillForm(data); 
    }
}

function cancelEdit(e) {
    if (e.target.classList.contains('post-cancel')) {
        ui.changeFormState('add');
    }
    e.preventDefault();
}






//