import React from 'react'
import BookChanger from './BookChanger'

class Book extends React.Component {
    render() {
        const { book } = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                            backgroundImage: `url(${book.imageLinks && book.imageLinks !== undefined ? 
                                                    book.imageLinks.thumbnail : 
                                                    '/default-cover.jpg'})` }}></div>
                    <BookChanger book={book} moveBook={this.props.moveBook} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors ? book.authors.join(", ") : 'Sem autor conhecido'}
                </div>
            </div>
        )
    }
}

export default Book