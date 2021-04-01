import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import youtube from './api/youtube'

class App extends React.Component {
  state = { videos: [] }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    console.log(response.data.items)
    this.setState({ videos: response.data.items })
    console.log('my state :', this.state.videos)
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <main className='container max-screen-xl mx-auto'>
          <SearchBar onFormSubmit={this.onTermSubmit}/>
          <h2>I have {this.state.videos.length} video(s) !</h2>
        </main>
      </div>
    )
  }
}

export default App
