import React, { Component } from 'react'

// import SearchInput from '../Components/SearchInput'
import { productsData } from '../data/index'

export default class SearchView extends Component {
  state = {
    searchValue: '',
  }

  render() {
    const { searchValue } = this.state
    let allProducts = []

    productsData.forEach(list => {
      list.forEach(productGroup => {
        const product = productGroup.products.map(product => product)
        allProducts = [...allProducts, ...product]
      })
    })

    const filterProducts = allProducts.filter(product => {
      return product.name.toLowerCase() === searchValue.toLowerCase()
    })

    const getStatus = (status) => {
      switch (status) {
        case 'green':
          return 'enjoy'

        case 'yellow':
          return 'larger portions (given in brackets) may cause problems'

        case 'red':
          return 'permitted only in the minimum quantity (given in brackets)'
      
        default:
          break
      }
    }

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
          {searchValue
            && (filterProducts.length > 0
              ? filterProducts
                .map((product, i) => <div key={i}>
                  <p>{product.name}</p>
                  <p>{product.status ? getStatus(product.status) : 'prohibited'}</p>
                </div>)
              : 'Try naming it differently or there is no such product yet')
          }
        </div>
      </div>
    )
  }
}
