import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import BooksLibrary from './components/book/BooksLibrary';
import BooksSearch from './components/book/BooksSearch';
import './App.css';

class BooksApp extends React.Component {
  state = {
      myBooks: []
  };

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ myBooks: books });
      })
  };

  moveBook = (book, shelf) => {
      book.shelf = shelf;
      BooksAPI.update(book, shelf).then(() => {
          this.setState((state) => ({
            myBooks: this.state.myBooks.filter((b) => b.id !== book.id).concat([book])
          }));
      })
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksLibrary myBooks={this.state.myBooks} moveBook={this.moveBook} />
        )}/>
        <Route path="/search" render={({ history }) => (
          <BooksSearch myBooks={this.state.myBooks} moveBook={this.moveBook} />
        )} />
      </div>
    );
  };
};

export default BooksApp;
