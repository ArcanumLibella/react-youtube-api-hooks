import React, { useState, useEffect } from 'react'
import './App.css'
import useVideos from './hooks/useVideos'

import SearchBar from './components/SearchBar'
import Header from './components/Header'
import VideosList from './components/VideosList'
import VideoDetails from './components/VideoDetails'

export default function App() {
  const [videos, search] = useVideos('bees')
  const [selectedVideo, setSelectedVideo] = useState(null)
  
  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className='App'>
      <Header />
      <main className='container max-screen-xl mx-auto'>
        <SearchBar onFormSubmit={search}/>

        <div className='lg:flex lg:justify-between m-4 mt-8'>
          <VideoDetails video={selectedVideo} />
          <VideosList videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
      </main>
    </div>
  )
}