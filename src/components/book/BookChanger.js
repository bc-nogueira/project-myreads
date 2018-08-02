import React from 'react';
import PropTypes from 'prop-types';

class BookChanger extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        moveBook: PropTypes.func.isRequired
    };

    chooseBGImage() {
        let name = 'book-shelf-changer';
        if(typeof this.props.book.shelf !== 'undefined' || this.props.book.shelf === 'none')
            name = name.concat(' update-img');
        return name;
    };

    render() {
        return(
            <div className={this.chooseBGImage()}>
                <select defaultValue={this.props.book.shelf !== undefined ? this.props.book.shelf : 'none' }
                        onChange={(event) => this.props.moveBook(this.props.book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    };
};

export default BookChanger;