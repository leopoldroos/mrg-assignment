
const baseUrl = '//localhost:1337/api/search'

module.exports = {
  getAllGames: () => {
    return fetch(`${baseUrl}/games`, { method: 'GET' })
      .then(res => (res.ok ? res.json() : Promise.resolve({error: 'Attans'})))
  }
}
