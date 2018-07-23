import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksList from './components/book/BooksList'
import BooksSearch from './components/book/BooksSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
      books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
}

  render() {
    console.log(this.state.books)

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksList
            booksReading={this.state.books.filter(book => book.shelf === "currentlyReading")}
            booksWantToRead={this.state.books.filter(book => book.shelf === "wantToRead")}
            booksRead={this.state.books.filter(book => book.shelf === "read")}
          />
        )}/>
        <Route path="/search" render={({ history }) => (
          <BooksSearch books={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
