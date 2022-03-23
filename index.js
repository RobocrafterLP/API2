const express = require('express')
const app = express()
const playerData = require('./manutd.json')

const port = 3000

app.get('/', (req, res) => {
    res.send("Manchester United Players")
})

app.get('/:user', (req, res) => {
  res.send("hi")
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})
