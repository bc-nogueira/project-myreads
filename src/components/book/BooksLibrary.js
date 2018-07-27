import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class BooksList extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    moveBook = (book, shelf) => {
        if (book.shelf !== shelf) {
            book.shelf = shelf
            BooksAPI.update(book, shelf).then(() => {
                this.setState((state) => ({
                    books: this.state.books.filter((b) => b.id !== book.id).concat([book])
                }))
            })
        } else {
            alert("O livro já se encontra nesta prateleira!")
        }
    }

    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading" moveBook={this.moveBook} 
                            books={this.state.books.filter(book => book.shelf === "currentlyReading")} />
                        <BookShelf title="Want to Read" moveBook={this.moveBook}  
                            books={this.state.books.filter(book => book.shelf === "wantToRead")} />
                        <BookShelf title="Read" moveBook={this.moveBook}  
                            books={this.state.books.filter(book => book.shelf === "read")} /> />
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