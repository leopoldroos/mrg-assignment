
const baseUrl = '//localhost:1337/api/search'

module.exports = {
  getAllGames: () => {
    return fetch(`${baseUrl}/games`, { method: 'GET' })
      .then(res => (res.ok ? res.json() : Promise.resolve({error: 'Attans'})))
  },

  getAllGameTags: () => {
    return fetch(`${baseUrl}/gametags`, { method: 'GET' })
      .then(res => (res.ok ? res.json() : Promise.resolve({error: 'Attans'})))
  },

  getGames: ({offset, limit, tag}) => {
    let url = `${baseUrl}/games?offset=${offset}&limit=${limit}`
    if (tag) {
      url += `&tag=${tag}`
    }
    return fetch(url, { method: 'GET' })
      .then(res => (res.ok ? res.json() : Promise.resolve({error: 'Attans'})))
  }
}
