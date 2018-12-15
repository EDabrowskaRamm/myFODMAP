import React, { Component } from 'react'

import { mobileWidth } from '../utils/consts'

let timeOut

export default class Navbar extends Component {
  state = {
    isMobile: false,
    collapsed: true,
  }

  handleWindowResize = () => {
    timeOut = setTimeout(() => {
      this.setState({ isMobile: window.innerWidth < mobileWidth })
    }, 500)

    return timeOut
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)
  }

  componentWillUnmount() {
    clearTimeout(timeOut)
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleToggleMobileMenu = () => this.setState({ collapsed: ! this.state.collapsed })

  render() {
    const { isMobile, collapsed } = this.state
    const isCollapsed = isMobile && collapsed ? 'collapse' : ''

    return (
      <div className='navbar'>
        <button 
          className='navbar__toggle'
          type='button'
          onClick={this.handleToggleMobileMenu}>
          X
        </button>
        <div className={`navbar__collapse ${isCollapsed}`}>
          <ul className='navbar__list'>
            <li className='navbar__list-item'>
              <a href='#'>What is FODMAP</a>
            </li>
            <li className='navbar__list-item'>
              <a href='#'>What you can</a>
            </li>
            <li className='navbar__list-item'>
              <a href='#'>What you can't</a>
            </li>
            <li className='navbar__list-item'>
              <a href='#'>Diet stages</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
