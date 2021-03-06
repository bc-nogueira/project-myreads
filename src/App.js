import React from 'react';
import { Route } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as BooksAPI from './utils/BooksAPI';
import BooksLibrary from './components/book/BooksLibrary';
import BooksSearch from './components/book/BooksSearch';
import './App.css';

class BooksApp extends React.Component {
  state = {
      myBooks: [],
      loading: true
  };

  async componentDidMount() {
    try {
      const myBooks = await BooksAPI.getAll();
      this.setState({
        myBooks,
        loading: false,
      });
    } catch (e) {
      Swal('Oops...', 'Erro ao carregar livros.', 'error')
      this.setState({ loading: false });
    }
  }

  moveBook = (book, shelf) => {
    const updatedBook = {
      ...book,
      shelf
    }

    if(shelf !== 'none')
      this.changeShelf(updatedBook);
    else
      this.removeFromShelfs(updatedBook);
  }

  changeShelf = (updatedBook) => {
    BooksAPI.update(updatedBook, updatedBook.shelf).then(() => {
        this.setState((state) => ({
          myBooks: this.state.myBooks.filter((b) => b.id !== updatedBook.id).concat([updatedBook])
        }));

        Swal('Sucesso', 'O livro foi movido.', 'success');
    });
  };

  removeFromShelfs = (removedBook) => {
    BooksAPI.update(removedBook, removedBook.shelf).then(() => {
      this.setState(() => ({
        myBooks: this.state.myBooks.filter((b) => b.id !== removedBook.id)
      }));

      Swal('Sucesso', 'O livro foi removido das suas prateleiras.', 'success');
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksLibrary myBooks={this.state.myBooks} moveBook={this.moveBook} loading={this.state.loading} />
        )}/>
        <Route path="/search" render={({ history }) => (
          <BooksSearch myBooks={this.state.myBooks} moveBook={this.moveBook} />
        )} />
      </div>
    );
  };
};

export default BooksApp;
