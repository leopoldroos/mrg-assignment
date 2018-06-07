const fs = require('fs')
const path = require('path')

module.exports = {
  getAllGames: async () => {
    return new Promise((resolve, reject) => {
      const cached = false
      if (cached) {
        return resolve(cached)
      }
      fs.readFile(path.resolve(__dirname, '../data', 'all-games.json'), {encoding: 'utf-8'}, (err, data) => {
        if (err) return reject(err)
        resolve(JSON.parse(data))
      })
    })
  }
}