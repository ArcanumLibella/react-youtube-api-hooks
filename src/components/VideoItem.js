import React from 'react'

export default function VideoItem({video}) {
    return (
        <div className='videoItem flex text-left mb-2 p-4 bg-blue-200 rounded cursor-pointer hover:bg-blue-300 transition-all'>
            <img src={video.snippet.thumbnails.medium.url} alt='Video preview' className='max-w-160 rounded' />
            <div className='ml-2'>
                <h4 className='font-semibold'>{video.snippet.title}</h4>
                <h5 className=''>{video.snippet.channelTitle}</h5>
            </div>
        </div>
    )
}
