const dataLoader =  require('./data-loader')
const expect = require('expect')

describe('data-loader', () => {
  describe('.getAllGames()', () => {
    it ('should read local file and return its content properly', (done) => {
      dataLoader.getAllGames().then((data) => {
        expect(data.length).toBeGreaterThan(100)
        done()
      })
    })
  })
})
