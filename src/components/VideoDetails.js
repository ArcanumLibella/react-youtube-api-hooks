import React from 'react'

const VideoDetails = ({video}) => {
    if (! video) {
        return (
            <div className='videoDetail flex flex-col items-start md:flex-grow p-4 rounded-xl bg-blue-50'>
                <h3 className='font-bold uppercase text-center mb-4'>Video Details</h3>
                <h4 className='font-bold text-left mb-4'>No selected video</h4>
            </div>
            )
    } else {
        return (
            <div className='videoDetail flex flex-col items-start md:flex-grow p-4 rounded-xl bg-blue-50'>
                <h3 className='font-bold uppercase text-center mb-4'>Video Details</h3>
                <h4 className='font-bold text-left mb-4'>{video.snippet.title}</h4>
            </div>
        )
    }
}

export default VideoDetails