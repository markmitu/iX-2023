import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './componets/BookForm';
import BookTable from './componets/BookTable';
import { Book } from './models/book'; 

import { useState, useEffect } from 'react';

function App() {

  // useState is a react function which lets us update a value
  // in this case that value is books, and the updator function is set_books
  const [books, set_books] = useState([]);
  const [book_to_edit, set_book_to_edit] = useState(null);

  useEffect(() => {
    load_from_local_storage();
  }, []);

  function on_book_created(book) {
    set_book_to_edit(null);
    set_books([...books, book]);
    save_to_local_storage([...books, book]);
  }

  function on_book_delete(book) {
    set_books(books.filter((x) => x.isbn !== book.isbn));
  }

  function on_book_edit(book) {
    set_book_to_edit(book);
    set_books(books.filter((x) => x.isbn !== book.isbn));
  }

  
  function save_to_local_storage(books) {
    const books_json = JSON.stringify(books);
    localStorage.setItem('books', books_json);
  }

  function load_from_local_storage() {
    const books_json = localStorage.getItem('books');
    if(books_json) {
      const temp = JSON.parse(books_json);
      set_books(temp.map((book) => Book.from_JSON(book)));
    }
  }

  return (
    <div className="mt-5">
      <div className="card p-4">
        <BookForm 
        on_book_created={on_book_created} 
        book_to_edit={book_to_edit}
        />
        <BookTable 
        books={books} 
        on_book_delete={on_book_delete} 
        on_book_edit={on_book_edit}
        />
      </div>
    </div>
  );
}


export default App;
