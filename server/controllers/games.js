const dataLoader = require('server/lib/data-loader')

const toLowerCase = (obj) => {
  let lowerCaseObj = {}
  Object.keys(obj).forEach(key => {
    lowerCaseObj[key.toLowerCase()] = obj[key]
  })
  return lowerCaseObj
}

module.exports = {
  search: (req) => {
    return new Promise(async (resolve, reject) => {
      const {tags, provider, offset, limit} = toLowerCase(req.query)
      try {
        const allGames = await dataLoader.getAllGames()
        resolve({allGames, tags, provider, offset, limit})
      } catch (err) {
        reject(err)
      }
    })
  }
}
