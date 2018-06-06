import React, { Component } from 'react'
import './App.css'
import Games from 'components/games'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src='logo-white-shadow.png' className='App-logo' alt='logo' />
          <h1 className='App-title'>Leopolds Assignment</h1>
        </header>
        <p className='App-intro'>
          Lets see how my <code>code</code> will develop.
        </p>
        <Games />
      </div>
    )
  }
}

export default App
