import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BooksShelf extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        myBooks: PropTypes.array.isRequired,
        moveBook: PropTypes.func.isRequired
    };
    
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.myBooks.map((book) => (
                            <li key={book.id}>
                                <Book book={book} moveBook={this.props.moveBook} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    };
};

export default BooksShelf;