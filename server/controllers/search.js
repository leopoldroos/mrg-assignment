const dataLoader = require('server/lib/data-loader')

module.exports = {
  getGames: (req) => {
    return new Promise(async (resolve, reject) => {
      let {offset, limit, tag} = req.query

      offset = parseInt(offset, 10)
      limit = parseInt(limit, 10)

      try {
        let allGames = await dataLoader.getAllGames()
        if (tag) {
          tag = tag.toLowerCase()
          allGames = allGames.filter(game => game.tags.map(tag => tag.toLowerCase()).includes(tag))
        }
        const totalHits = allGames.length
        allGames.sort()
        const games = allGames.slice(offset, offset + limit)
        resolve({games, totalHits})
      } catch (err) {
        reject(err)
      }
    })
  },
  getGameTags: (req) => {
    return new Promise(async (resolve, reject) => {
      try {
        const allGames = await dataLoader.getAllGames()
        let allGameTags = []
        allGames.forEach(game => {
          game.tags.map(tag => tag.toLowerCase()).forEach(tag => (!allGameTags.includes(tag) && allGameTags.push(tag)))
        })
        allGameTags.sort()
        resolve({allGameTags})
      } catch (err) {
        reject(err)
      }
    })
  }
}
