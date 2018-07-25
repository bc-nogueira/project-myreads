import React from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class BooksSearch extends React.Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    clearQuery= () => {
        this.setState({ query: '' })
    }

    render() {
        const { books } = this.props
        const { query } = this.state

        let showingBooks
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter((book) => match.test(book.title))
        } else {
            showingBooks = books
        }

        showingBooks.sort(sortBy('title'))

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
                            value={query} onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results container">
                    <div className="row">
                        {showingBooks.map((book) => (
                            <div key={book.id} className="col-sm-12 col-md-5 offset-md-1 mt-4 card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-3">
                                            <img src={book.imageLinks.thumbnail} alt="" className="book-cover-search"/>
                                        </div>
                                        <div className="col-9">
                                            <h5 class="card-title">{book.title}</h5>
                                            <h6 class="card-subtitle mt-2 text-muted">{book.authors}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksSearch