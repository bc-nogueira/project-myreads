import React from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BooksSearch extends React.Component {
    state = {
        books: [],
        query: '',
        vazio: false
    }
    
    searchBooks = (string) => {
        const { query } = this.state
        this.setState({ query: string })

        if (query) {
            BooksAPI.search(query, 20).then((books) => {
                books.length > 0 ? 
                    this.setState({ books: books.sort(sortBy('title')), vazio: false }) : 
                    this.setState({ books: [], vazio: true })
            })
        } else {
            this.setState({ books: [], vazio: false })
        }
    }

    clearQuery= () => {
        this.searchBooks("")
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
        const { books, vazio } = this.state
        
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" 
                            value={this.state.query} 
                            onChange={(event) => this.searchBooks(event.target.value)} />
                    </div>
                    <div className="clear-search" onClick={this.clearQuery}></div>
                </div>
                <div className="search-books-results">
                    {books.length > 0 && (
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.map((book) => (
                                    <li key={book.id}>
                                        <Book book={book} moveBook={this.moveBook} />
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}
                    {vazio && (
                        <h3 className="text-center mt-4">Nenhum livro encontrado.</h3>
                    )}
                </div>
            </div>
        )
    }
}

export default BooksSearch