import React from 'react'


export default function book_table(props) {
  return (
    <div>
        <table className='table mt-5'>
            <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN</th>
                  <th>Action</th>
                </tr>
            </thead>
            <tbody id='table-body'>
              {
                props.books.map((book) => {
                  return (
                    <tr key={book.isbn}> 
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.isbn}</td>
                      <td>
                        <button
                        className='btn btn-danger btn-sm me-1'
                        onClick={() => props.on_book_delete(book)}
                        >Delete</button>
                        <button
                        className='btn btn-warning btn-sm'
                        onClick={() => props.on_book_edit(book)}
                        >Edit</button>
                      </td>
                    </tr> );
                })
              }
            </tbody>
        </table>
    </div>
  )
}
