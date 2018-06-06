import React, { Component } from 'react'

class Games extends Component {
  constructor (props) {
    super(props)
    this.state = {
      genre: null,
      games: null
    }
  }

  componentsDidMount () {
    this.setState({
      games: []
    })
  }

  render () {
    const { games } = this.state
    if (games !== null) return null

    if (!games) {
      return <div><p>Attans! Inga spel att visa just nu.</p></div>
    }

    return (
      <div>
        <ul>
          {games.map(game => (
            <li>
              <img src='{game.name}' alt={game.name} />

              {game.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Games
