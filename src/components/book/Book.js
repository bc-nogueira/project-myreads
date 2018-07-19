import React from 'react'
import BookChanger from './BookChanger'

class Book extends React.Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                            backgroundImage: `url(${this.props.book.imageLinks && this.props.book.imageLinks !== undefined ? this.props.book.imageLinks.thumbnail : ''})` }}></div>
                    <BookChanger />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

export default Book