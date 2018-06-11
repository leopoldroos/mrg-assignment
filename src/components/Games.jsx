import React, { Component } from 'react'
import './Games.css'
import imageWrapper from 'lib/image-wrapper'
import searchService from 'services/search-service'

class Games extends Component {
  constructor (props) {
    super(props)
    this.state = {
      games: [],
      hasMoreGames: false,
      limit: 10,
      offset: 0,
      selectedTag: null,
      tags: null,
      totalHits: null
    }

    this.fetchAllCategories = this.fetchAllCategories.bind(this)
    this.fetchMoreGames = this.fetchMoreGames.bind(this)
    this.tagSelected = this.tagSelected.bind(this)
    this.renderOption = this.renderOption.bind(this)
  }

  componentDidMount () {
    this.fetchMoreGames()
    this.fetchAllCategories()
  }

  async fetchAllCategories () {
    try {
      const {allGameTags} = await searchService.getAllGameTags()
      this.setState({
        tags: allGameTags
      })
    } catch (err) {
      // console.error(err)
      this.setState({
        tags: []
      })
    }
  }

  async fetchMoreGames () {
    const {offset, limit, selectedTag, games} = this.state
    let currentGames = games
    try {
      const {games, totalHits} = await searchService.getGames({offset, limit, tag: selectedTag})
      
      this.setState({
        games: currentGames.concat(games),
        offset: Math.min(offset+limit, totalHits),
        hasMoreGames: (offset + limit) < totalHits,
        totalHits
      })
    } catch (err) {
      // console.error(err)
    }
  }

  tagSelected (tag) {
    const {selectedTag} = this.state
    tag = tag.toLowerCase()

    if (selectedTag !== tag) {
      this.setState({
        games: [],
        hasMoreGames: true,
        limit: 10,
        offset: 0,
        selectedTag: tag
      }, this.fetchMoreGames)
    }
  }

  renderOption (tag) {
    const {selectedTag} = this.state
    tag = tag.toLowerCase()
    return  <option value={tag} key={tag} selected={selectedTag === tag} >{tag}</option>
  }

  render () {
    const { games, tags, selectedTag, hasMoreGames } = this.state
    if (tags === null) return <div><p>laddar...</p></div>

    if (!games) {
      return <div><p>Attans! Inga spel att visa just nu.</p></div>
    }

    return (
      <div>
        <div className='tags'>
          <select defaultValue={selectedTag} onChange={(ev) => this.tagSelected(ev.target.value)}>
            <option value=''>Alla</option>
            {tags.map(this.renderOption)}
          </select>
        </div>
        <div className='games-list'>
          {games.map(game => (
            <div className='game-card' key={game.id}>
              <span className='game-card_image'><img src={imageWrapper({url: game.thumbnailUrl})} alt={game.name} /></span>
              <div className='game-card_texts'>
                <p className='game-card_title'>{game.name}</p>
                <p className='game-card_tags'>{game.tags.map(tag => (<span key={tag} className='game-card_tag' onClick={(ev) => this.tagSelected(tag)}>{tag}</span>))}</p>
                {/* <p className="game-card_description">{game.description}</p> */}
              </div>
            </div>
          ))}
        </div>
        {hasMoreGames && (
        <div className='more-games'>
          <button onClick={this.fetchMoreGames}>Ladda fler</button>
        </div>)}
      </div>
    )
  }
}

export default Games
