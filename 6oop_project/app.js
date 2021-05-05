// book constructor
function Book(title, author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}

//ui constructor
function UI(){}

UI.prototype.addBookToList=function(book){
    // console.log(book);
    const list= document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td><a href="#" class="delete">x</a>  </td>

    `;
    list.appendChild(row);
    // console.log(row);
}
//delete book
UI.prototype.deleteBook=function(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();
    }
}

//clear fields
UI.prototype.clearFields= function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';

}
UI.prototype.showAlert = function(message, className){
    //create div
    const div = document.createElement('div');
    div.className=`alert ${className}`;
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div,form);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000) ;   
}

// event listeners
document.getElementById('book-form').addEventListener('submit',
function(e){
    //get form values
    const title= document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn= document.getElementById('isbn').value
    //instantiate book
    const book = new Book(title,author,isbn);
        // console.log(book);
    
    // instantiate ui
    const ui= new UI();
    //validate
    if(title===''||author===''||isbn===''){
        //error
        ui.showAlert('Please fill in all fields', 'error');
    }else{
        
    // add book to list
    ui.addBookToList(book);

    //success
    ui.showAlert('book added', 'success')
    // clear fields
    ui.clearFields();
    
    }
    e.preventDefault();
})


// event listener for delete

document.getElementById('book-list').addEventListener('click', function(e){
   
   console.log(123);

       // instantiate ui
       const ui= new UI();
       // delete book
       ui.deleteBook(e.target);
       ui.showAlert('book remove', 'success');
    e.preventDefault();
})





