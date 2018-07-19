import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Search from './Search'
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
          <ListBooks
            booksReading={this.state.books.filter(book => book.shelf === "currentlyReading")}
            booksWantToRead={this.state.books.filter(book => book.shelf === "wantToRead")}
            booksRead={this.state.books.filter(book => book.shelf === "read")}
          />
        )}/>
        <Route path="/search" render={({ history }) => (
          <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
