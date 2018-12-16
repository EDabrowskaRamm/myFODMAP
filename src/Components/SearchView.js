import React, { Component } from 'react'

// import SearchInput from '../Components/SearchInput'
import { allProducts } from '../data/index'

export default class SearchView extends Component {
  state = {
    searchValue: '',
  }

  render() {
    const { searchValue } = this.state
    const productGroupArray = allProducts.map(productGroup => productGroup)
    const productsArray = productGroupArray.map(foodGroup => foodGroup.products)
          // .map(product => product.name)

    // const filterProducts = products.filter(productName => productName == searchValue)
console.log(productGroupArray, productsArray)
    return (
      <div className='search-view'>
        <div className='search-view__input-wrapper'>
          <p>Search for product</p>
          <input
            type='text'
            name='search-input'
            onChange={e => this.setState({ searchValue: e.currentTarget.value })} />
        </div>
        <div className='search-view__results'>
          {searchValue && <p>{searchValue}</p>}
        </div>
      </div>
    )
  }
}
