import React from 'react'
import BookCard from './BookCard'

const BookGrid = ({ books, loading, error, onDeleteBook }) => {


    if(error) return <div>Error: {error}</div>
  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {loading ? (<div>Loading...</div>) 
        : books.length === 0 ? (<div>No books found</div>) 
        : (books.map((book) => (
            <BookCard key={book._id} book={book} onDeleteBook={onDeleteBook} /> 
        )))}
    </div>
  )
}

export default BookGrid