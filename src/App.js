import React from 'react'
import { Route } from 'react-router-dom'
import BooksList from './components/book/BooksList'
import BooksSearch from './components/book/BooksSearch'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksList />
        )}/>
        <Route path="/search" render={({ history }) => (
          <BooksSearch />
        )} />
      </div>
    )
  }
}

export default BooksApp
