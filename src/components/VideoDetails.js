import React from 'react'

const VideoDetails = ({video}) => {

    if (! video) {
        return (
            <div className='videoDetail flex flex-col lg:flex-grow-2 items-start md:flex-grow p-4 rounded-xl bg-blue-50'>
                <h3 className='font-bold uppercase text-center mb-4'>Video Details</h3>
                <h4 className='font-bold text-left mb-4'>No selected video</h4>
            </div>
            )
    } else {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        
        return (
            <div className='videoDetail flex flex-col lg:flex-grow-2 items-start md:flex-grow p-4 rounded-xl bg-blue-50'>
                <h3 className='font-bold uppercase text-center mb-4'>Video Details</h3>
                <div className='w-full h-full mb-4'>
                    <iframe className='w-full h-full' title={video.id.videoId} src={videoSrc} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                </div>
                <h4 className='font-bold text-left mb-4'>{video.snippet.title}</h4>
                <p className='text-left'>{video.snippet.description}</p>
            </div>
        )
    }
}

export default VideoDetails