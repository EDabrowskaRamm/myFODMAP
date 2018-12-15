import React, { Component } from 'react'

import Navbar from '../Components/Navbar'
import SearchView from '../Components/SearchView'
import Footer from '../Components/Footer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='wrapper'>
          <header>
            <Navbar />
          </header>
          <main>
            <SearchView />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    )
  }
}

export default App
