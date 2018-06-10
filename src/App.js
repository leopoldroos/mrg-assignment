import React, { Component } from 'react'
import './App.css'
import Games from 'components/Games'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src='logo-white-shadow.png' className='App-logo' alt='logo' />
          <h1 className='App-title'>Leopolds Assignment</h1>
        </header>
        <Games />
      </div>
    )
  }
}

export default App
