import React from 'react';
import { Route } from 'react-router-dom';
import Swal from 'sweetalert2';
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
      }).catch(() => {
        Swal('Oops...', 'Erro ao carregar livros.', 'error')
      });
  };

  moveBook = (book, shelf) => {
    const updatedBook = {
      ...book,
      shelf
    }

    BooksAPI.update(updatedBook, shelf).then(() => {
        this.setState((state) => ({
          myBooks: this.state.myBooks.filter((b) => b.id !== updatedBook.id).concat([updatedBook])
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
