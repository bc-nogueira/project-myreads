import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class BooksList extends React.Component {
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title="Currently Reading" books={this.props.booksReading} moveBook={this.props.moveBook} />
                        <Bookshelf title="Want to Read" books={this.props.booksWantToRead} moveBook={this.props.moveBook} />
                        <Bookshelf title="Read" books={this.props.booksRead} moveBook={this.props.moveBook} />
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