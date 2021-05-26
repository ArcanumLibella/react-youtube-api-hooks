import React from 'react'
import './App.css'
import youtube from './api/youtube'

import SearchBar from './components/SearchBar'
import Header from './components/Header'
import VideosList from './components/VideosList'
import VideoDetails from './components/VideoDetails'

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onTermSubmit('Anax imperator')
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0] 
    })
    console.log(this.state.videos)
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <main className='container max-screen-xl mx-auto'>
          <SearchBar onFormSubmit={this.onTermSubmit}/>

          <div className='lg:flex lg:justify-between m-4 mt-8'>
            <VideoDetails video={this.state.selectedVideo} />
            <VideosList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
          </div>
        </main>
      </div>
    )
  }
}

export default App
