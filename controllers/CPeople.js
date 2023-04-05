require('dotenv').config()

const axios = require('axios')
const baseURL = process.env.API

const getPeople = async (url = '', data = []) => {
  try {
    const response = await axios.get(url)

    data = data?.concat(response?.data?.results)

    if (response?.data?.next !== null) {
      return await getPeople(response?.data?.next, data)
    }

    return data

  } catch (error) {
    console.log(`People error: `, error)
  }
}

const getAllPeople = async (req, res) => {
  try {

    let data = await getPeople(`${baseURL}/people`) || []

    const sortBy = req.query.sortBy

    if (sortBy === 'name' || sortBy === 'height' || sortBy === 'mass') {
      data?.sort((a, b) =>{
        if (a[sortBy] < b[sortBy]) {
          return -1
        }
        if (a[sortBy] > b[sortBy]) {
          return 1
        }
        return 0
      })
    }

    res.send(data)

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllPeople
}
