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
            <div className="card bookshelf m-4 pb-0">
                <div className="card-body">
                    <h2 className="card-title bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.myBooks.length > 0 ?
                                this.props.myBooks.map((book) => (
                                    <li key={book.id}>
                                        <Book book={book} moveBook={this.props.moveBook} />
                                    </li>
                                ))
                                :
                                <div className="mt-3 alert alert-warning" role="alert">
                                    <h5 className="mb-0">Não há livros nessa prateleira</h5>
                                </div>
                            }
                        </ol>
                    </div>
                </div>
            </div>
        );
    };
};

export default BooksShelf;