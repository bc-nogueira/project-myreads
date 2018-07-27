import React from 'react'
import { Route } from 'react-router-dom'
import BooksLibrary from './components/book/BooksLibrary'
import BooksSearch from './components/book/BooksSearch'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksLibrary />
        )}/>
        <Route path="/search" render={({ history }) => (
          <BooksSearch />
        )} />
      </div>
    )
  }
}

export default BooksApp
