import dotenv from 'dotenv'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

dotenv.config()

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
