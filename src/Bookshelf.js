import React from 'react'
import Book from './Book'

class BooksShelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li>
                                <Book url={book.url}
                                    title={book.title} authors={book.authors} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BooksShelf