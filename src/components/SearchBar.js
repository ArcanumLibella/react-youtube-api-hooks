import React, { Component } from 'react'

export default class SearchBar extends Component {
  render () {
    return (
      <header className=''>
        <form>
          <input
            type='text'
            placeholder='Maxime Gasteuil'
          />
        </form>
      </header>
    )
  }
}
