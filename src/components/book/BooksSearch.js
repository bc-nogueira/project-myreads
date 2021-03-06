import React from 'react';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';
import { DelayInput } from 'react-delay-input';
import { ClipLoader, RingLoader } from 'react-spinners';
import * as BooksAPI from './../../utils/BooksAPI';
import PropTypes from 'prop-types';
import Book from './Book';

class BooksSearch extends React.Component {
    static propTypes = {
        myBooks: PropTypes.array.isRequired,
        moveBook: PropTypes.func.isRequired
    };

    state = {
        queriedBooks: [],
        query: '',
        empty: false,
        loading: false
    };

    searchBooks = (event) => {
        const { myBooks } = this.props;
        const query = event.target.value;
        this.setState({ query: query });

        if (query && query.length > 0) {
            this.setState({ loading: true });
            BooksAPI.search(query, 20).then((books) => {
                this.setState({ loading: false });
                if(books.length > 0) {
                    for(let myBook of myBooks) {
                        books.forEach((b) => { if (b.id === myBook.id) b.shelf = myBook.shelf });
                    }
                    this.setState({ queriedBooks: books.sort(sortBy('title')), empty: false });
                } else {
                    this.setState({ queriedBooks: [], empty: true });
                }
            })
        } else {
            this.setState({ queriedBooks: [], empty: false });
        }
    };

    clearQuery= () => {
        this.setState({ query: '', queriedBooks: [], empty: false });
    };

    render() {
        const { queriedBooks, empty, loading, query } = this.state;
        
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <DelayInput type="text" placeholder="Search by title or author" 
                            value={query} delayTimeout={300}
                            onChange={(event) => this.searchBooks(event)} />
                    </div>
                    <ClipLoader
                        loaderStyle={{ 'margin-top': '12px' }}
                        color={'#000'}
                        loading={loading}
                    />
                    <div className="clear-search" onClick={this.clearQuery}></div>
                </div>
                {loading ?
                    <RingLoader
                        loaderStyle={{ margin: '0 auto', 'margin-top': '150px' }}
                        sizeUnit={'px'}
                        size={150}
                        color={'#000'}
                        loading={loading}
                    /> :
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
                        {empty && (
                            <h3 className="text-center mt-4">Nenhum livro encontrado.</h3>
                        )}
                    </div>
                }
            </div>
        );
    };
};

export default BooksSearch;