import React from 'react'

export default function VideoItem({video}) {
    return (
        <div className='videoItem flex text-left mb-2 p-4 bg-blue-200 rounded cursor-pointer hover:bg-blue-300 transition-all'>
            <img src={video.snippet.thumbnails.default.url} alt='Video preview' />
            <h4 className='ml-2 font-semibold'>{video.snippet.title}</h4>
        </div>
    )
}
