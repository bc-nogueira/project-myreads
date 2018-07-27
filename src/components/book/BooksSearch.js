import React from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BooksSearch extends React.Component {
    state = {
        queriedBooks: [],
        query: '',
        vazio: false
    }
    
    searchBooks = (string) => {
        const { query } = this.state
        const { myBooks } = this.props
        this.setState({ query: string })

        if (query) {
            BooksAPI.search(query, 20).then((books) => {
                if(books.length > 0) {
                    for(let myBook of myBooks) {
                        books.map((b) => { if (b.id === myBook.id) b.shelf = myBook.shelf })
                    }
                    this.setState({ queriedBooks: books.sort(sortBy('title')), vazio: false })
                } else {
                    this.setState({ queriedBooks: [], vazio: true })
                }
            })
        } else {
            this.setState({ queriedBooks: [], vazio: false })
        }
    }

    clearQuery= () => {
        this.searchBooks("")
    }

    render() {
        const { queriedBooks, vazio } = this.state
        
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
                    {queriedBooks.length > 0 && (
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {queriedBooks.map((book) => (
                                    <li key={book.id}>
                                        <Book book={book} moveBook={this.props.moveBook} />
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