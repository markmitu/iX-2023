import React, { useState, useEffect } from 'react'
import { Book } from '../models/book';


export default function Book_form(props) {
    const [title, set_title] = useState('');
    const [author, set_author] = useState('');
    const [isbn, set_isbn] = useState('');

    //  call a react hook that runs a function anytime a given variable/object changes
    useEffect(() => {
        if(props.book_to_edit) {
            set_title(props.book_to_edit.title);
            set_author(props.book_to_edit.author);
            set_isbn(props.book_to_edit.isbn);
        }
    }, [props.book_to_edit]);

    function on_book_form_submit(e) {
        e.preventDefault();
        if(!is_valid()) return;

        let book = new Book(title, author, isbn);
        props.on_book_created(book);
        set_title('');
        set_author('');
        set_isbn('');
    }

    function is_valid() {
        return title !== '' && author !== '' && isbn !== '';
    }

    return (
        <div>
            <h1>Library Books</h1>
            <form id='form' onSubmit={on_book_form_submit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input id='title-input' type='text' 
                    className='form-control mb-2' 
                    placeholder='Enter Book Title'
                    value={title}
                    onChange={(e) => set_title(e.target.value)}>
                    </input>

                    <label className="form-label">Author</label>
                    <input id='author-input' type='text' 
                    className='form-control mb-2' 
                    placeholder='Enter Author'
                    value={author}
                    onChange={(e) => set_author(e.target.value)}>
                    </input>

                    <label className="form-label">ISBN</label>
                    <input id='isbn-input' type='text' 
                    className='form-control mb-2' 
                    placeholder='Enter ISBN'
                    value={isbn}
                    onChange={(e) => set_isbn(e.target.value)}>
                    </input>
                </div>

                <div className='d-grid mt-4'>
                    <button className='btn btn-outline-primary' type='submit'>
                        { props.book_to_edit ? 'Update Book' : "Add Book"}
                    </button>
                </div>
            </form>
        </div>
  )
}
