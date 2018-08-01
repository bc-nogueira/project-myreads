import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const BooksLibrary = (props) => {
    const { myBooks, moveBook } = props;

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf title="Currently Reading" moveBook={moveBook}
                        myBooks={myBooks.filter(book => book.shelf === 'currentlyReading')} />
                    <BookShelf title="Want to Read" moveBook={moveBook}
                        myBooks={myBooks.filter(book => book.shelf === 'wantToRead')} />
                    <BookShelf title="Read" moveBook={moveBook}
                        myBooks={myBooks.filter(book => book.shelf === 'read')} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
};

BooksLibrary.propTypes = {
    myBooks: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
};

export default BooksLibrary;