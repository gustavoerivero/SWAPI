const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

require('dotenv').config()

const port = process.env.PORT || 3000
const app = express()

const routes = require('./routes')

app.use(express.json())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use(`${process.env.URL}`, routes)

app.get(process.env.URL, (req, res) => res.send('Connected!'))
app.get(`${process.env.URL}${process.env.API_VER_URL}`, (req, res) =>
  res.send(`Connected on SWAPI API ${process.env.API_VER} version!`)
)

app.listen(port, () => {
  console.log(`Server is running on ${process.env.URL}`)
})