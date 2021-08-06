import React, { useState, useEffect } from 'react'
import './App.css'
import youtube from './api/youtube'

import SearchBar from './components/SearchBar'
import Header from './components/Header'
import VideosList from './components/VideosList'
import VideoDetails from './components/VideoDetails'

export default function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  
  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      } 
    })

    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
    console.log(`videos : `, videos)
  }

  useEffect(() => {
    onTermSubmit('Anax imperator')
  }, [])

  const onVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <div className='App'>
      <Header />
      <main className='container max-screen-xl mx-auto'>
        <SearchBar onFormSubmit={onTermSubmit}/>

        <div className='lg:flex lg:justify-between m-4 mt-8'>
          <VideoDetails video={selectedVideo} />
          <VideosList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
      </main>
    </div>
  )
}