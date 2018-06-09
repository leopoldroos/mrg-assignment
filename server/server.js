const express = require('express')
const app = express()
const gamesController = require('server/controllers/games')

app.get('*', (req, res, next) => {
  console.log('Incoming request: ', req.method, req.url)
  next()
})

app.get('/api/search/games', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    const data = await gamesController.search(req)
    res.type('application/json')
    res.json(data)
  } catch (err) {
    res.type('application/json')
    res.status(500).send({error: err.message})
  }
})

app.get('*', (req, res) => {
  res.sendStatus(404)
})

const PORT = process.env.SERVER_PORT || 1337

app.listen(PORT, () => {
  console.log(`MRG Assignment Server listening on port ${PORT}!`)
})
