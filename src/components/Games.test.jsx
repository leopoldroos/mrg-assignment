import React from 'react'
import ReactDOM from 'react-dom'
import Games from './Games'

describe('Games', () => {
  test('should render', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Games />, div)
    ReactDOM.unmountComponentAtNode(div)
    })
})
