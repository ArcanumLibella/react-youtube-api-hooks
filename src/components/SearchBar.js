import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: ''}

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)
  }

  render () {
    return (
      <div className='searchBar p-8 m-4 mt-8 rounded-xl bg-blue-100'>
        <form className='flex flex-col' onSubmit={this.onFormSubmit}>
          <label className='text-left font-medium mb-2'>Looking for a video :</label>
          <input
            className='p-4 rounded'
            type='text'
            placeholder='Maxime Gasteuil'
            value={ this.state.term }
            onChange={ (e) => this.setState({term: e.target.value}) }
          />
        </form>
      </div>
    )
  }
}
