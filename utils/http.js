const axios = require('axios')

require('dotenv').config()

const http = axios.create({
  baseURL: process.env.API,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

module.exports = http