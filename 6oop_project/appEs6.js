class Book{
    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{
    addBookToList(book){
  // console.log(book);
  const list= document.getElementById('book-list');
  //create tr element
  const row = document.createElement('tr');
  // insert cols
  row.innerHTML=`
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">x</a>  </td>

  `;
  list.appendChild(row);
  // console.log(row);
    }

   showAlert(message, className){
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

   deleteBook(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();
    }
   }

   clearFields(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
   }

}
//local storage
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books')===null){
            books=[];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks(){
        const books = Store.getBooks();
        books.forEach(function(book){
            const ui = new UI;

            // add book to ui
            ui.addBookToList(book);
        });
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn){
        console.log(isbn);
        const books = Store.getBooks();
        books.forEach(function(book, index){
          if(book.isbn===isbn){
              books.splice(index,1);

          }
        localStorage.setItem('books', JSON.stringify(books));

        });
        
    }
}

// dom load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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
    //add to local storage
    Store.addBook(book);
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
       Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
       ui.showAlert('book remove', 'success');
    e.preventDefault();
})







