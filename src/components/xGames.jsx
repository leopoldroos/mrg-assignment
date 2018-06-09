import React, { Component } from 'react'
import './Games.css'
import imageWrapper from 'lib/image-wrapper'
import searchService from 'services/search-service'

class Games extends Component {
  constructor (props) {
    super(props)
    this.state = {
      genre: null,
      games: null
    }
  }

  async componentDidMount () {
    try {
      const {allGames} = await searchService.getAllGames()
      this.setState({
        games: allGames
      })
    } catch (err) {
      this.setState({
        games: []
      })
    }
  }

  render () {
    const { games } = this.state
    if (games === null) return <div><p>laddar...</p></div>

    if (!games) {
      return <div><p>Attans! Inga spel att visa just nu.</p></div>
    }

    return (
      <div className="games-list">
        {games.map(game => (
          <div className="game-card" key={game.id}>
            <span className="game-card_image"><img src={imageWrapper({url: game.thumbnailUrl})} alt={game.name} /></span>
            <div className="game-card_texts">
              <p className="game-card_title">{game.name}</p>
              {/* <p className="game-card_description">{game.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Games
