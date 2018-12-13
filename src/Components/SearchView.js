import React, { Component } from 'react'

import SearchInput from '../Components/SearchInput'

export default class SearchView extends Component {
  render() {
    return (
      <div className='search-view'>
        <p>Search for product</p>
        <SearchInput />
      </div>
    )
  }
}
