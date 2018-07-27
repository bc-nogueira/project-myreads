import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BooksList extends React.Component {
    render() {
        const { myBooks, moveBook } = this.props

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading" moveBook={moveBook} 
                            books={myBooks.filter(book => book.shelf === "currentlyReading")} />
                        <BookShelf title="Want to Read" moveBook={moveBook}  
                            books={myBooks.filter(book => book.shelf === "wantToRead")} />
                        <BookShelf title="Read" moveBook={moveBook}  
                            books={myBooks.filter(book => book.shelf === "read")} /> />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BooksList