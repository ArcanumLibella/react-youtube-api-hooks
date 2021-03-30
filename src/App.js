import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import youtube from './api/youtube'

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term
      }
    })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <main className='container max-screen-xl mx-auto'>
          <SearchBar onFormSubmit={this.onTermSubmit}/>
        </main>
      </div>
    )
  }
}

export default App
