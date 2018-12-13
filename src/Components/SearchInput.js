import React from 'react'

const SearchInput = ({ name, className }) => {
  return (<input
    type='text'
    name={name}
    className={className} />)
}

export default SearchInput