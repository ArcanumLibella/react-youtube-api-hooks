import React, { Component } from 'react'

export default class SearchBar extends Component {
  render () {
    return (
      <div className='searchBar p-8 m-4 mt-8 rounded-xl bg-blue-100'>
        <form className='flex flex-col'>
          <label className='text-left font-medium mb-2'>Looking for a video :</label>
          <input
            className='p-4 rounded'
            type='text'
            placeholder='Maxime Gasteuil'
          />
        </form>
      </div>
    )
  }
}
