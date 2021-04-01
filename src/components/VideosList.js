import React from 'react'
import VideoItem from './VideoItem'

export default function VideosList({videos}) {
    return (
        <aside className='videosList md:flex md:flex-grow-1 flex-col mt-8 md:mt-0 md:ml-4 p-4 bg-blue-50 rounded-xl'>
            <h3 className='font-bold uppercase text-center mb-4'>Videos List</h3>
            <div className='flex flex-col'>
                <VideoItem />
                <VideoItem />
                <VideoItem />
            </div>
        </aside>
    )
}
