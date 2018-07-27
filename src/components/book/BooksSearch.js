import React from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import BookChanger from './BookChanger'

class BooksSearch extends React.Component {
    state = {
        books: [],
        query: '',
        vazio: false
    }
    
    searchBooks = (string) => {
        const query = string.trim()
        this.setState({ query: query })
        
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
                <div className="search-books-results container-fluid">
                    {books.length > 0 && (
                        <div className="row justify-content-center">
                            {books.map((book) => (
                                <div key={book.id} className="col-md-12 col-lg-5 mr-4 mt-4 card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-3">
                                                <img alt="" className="book-cover-search"
                                                    src={book.imageLinks && book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''} />
                                            </div>
                                            <div className="col-9">
                                                <h5 className="card-title">{book.title}</h5>
                                                <div className="row">
                                                    <h6 className="card-subtitle mt-2 text-muted col-8">{book.authors}</h6>

                                                    <BookChanger className="col-4" book={book} moveBook={this.props.moveBook} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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