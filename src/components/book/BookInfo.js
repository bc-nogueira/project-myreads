import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import Rating from 'react-rating';

class BookInfo extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired
    };

    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        const { book } = this.props;

        return (
            <div>
                <div className="book-info" onClick={this.onOpenModal}></div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div>
                        <h3>{book.title}</h3>
                        {book.subtitle && (
                            <h5>{book.subtitle}</h5>
                        )}
                        <hr/>
                        <div className="row">
                            <div className="col-sm-12 col-md-3">
                                <div className="book-cover-info row" style={{
                                    width: 128, height: 193,
                                    backgroundImage: `url(${book.imageLinks && book.imageLinks !== undefined ?
                                        book.imageLinks.thumbnail :
                                        '/default-cover.jpg'})`
                                }}></div>
                                {book.pageCount && (
                                    <div className="row">
                                        <h6>Pages: {book.pageCount}</h6>
                                    </div>
                                )}
                                {book.averageRating && (
                                    <div className="row">
                                        <Rating initialRating={book.averageRating} readonly
                                            emptySymbol={<img src="/star-empty.png" className="icon" alt="Empty star" />}
                                            fullSymbol={<img src="/star-full.png" className="icon" alt="Full star" />} />
                                    </div>
                                )}
                                {book.ratingsCount && (
                                    <div className="row">
                                        from {book.ratingsCount} rates
                                    </div>
                                )}
                                {book.categories && (
                                    <div className="row">
                                        {book.categories.map((category, index) => (
                                            <span key={index} className="badge badge-pill badge-primary">{category}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="col-sm-12 offset-md-1 col-md-8">
                                <h5>{book.authors ? book.authors.join(', ') : 'Sem autor conhecido'}</h5>
                                {book.publisher && (
                                    <h6>Publisher: {book.publisher}</h6>
                                )}
                                {book.publishDate && (
                                    <h6>Publish Date: {book.publishDate}</h6>
                                )}
                                <p className="book-description">
                                    {book.description ? book.description :'Este livro não possui descrição.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    };
};

export default BookInfo;