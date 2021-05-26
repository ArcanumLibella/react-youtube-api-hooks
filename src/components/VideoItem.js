import React from 'react'

export default function VideoItem({video, onVideoSelect}) {
    return (
        <div 
            className='videoItem flex flex-col md:flex-row lg:h-40 text-left mb-2 p-4 bg-blue-200 rounded cursor-pointer hover:bg-blue-300 transition-all' 
            onClick={() => onVideoSelect(video)} 
        >
            <img 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title} 
                className='md:max-w-160 rounded' 
            />
            <div className='mt-4 md:ml-2 md:mt-0 overflow-y-scroll'>
                <h4 className='font-semibold'>{video.snippet.title}</h4>
                <h5 className=''>{video.snippet.channelTitle}</h5>
            </div>
        </div>
    )
}
