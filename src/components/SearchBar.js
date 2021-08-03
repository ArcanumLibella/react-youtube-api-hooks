import React, { useState } from 'react'

export default function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(term)
  }

  return (
    <div className='searchBar p-8 m-4 mt-8 rounded-xl bg-blue-100'>
      <form className='flex flex-col' onSubmit={onSubmit}>
        <label className='text-left font-medium mb-2'>Looking for a video :</label>
        <input
          className='p-4 rounded'
          type='text'
          placeholder='Anax imperator'
          value={ term }
          onChange={ (e) => setTerm(e.target.value) }
        />
      </form>
    </div>
  )
}

