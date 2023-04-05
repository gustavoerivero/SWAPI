require('dotenv').config()

const axios = require('axios')
const baseURL = process.env.API

const getPlanets = async (url = '', data = []) => {
  try {
    const response = await axios.get(url)

    data = data?.concat(response?.data?.results)

    if (response?.data?.next !== null) {
      return await getPlanets(response?.data?.next, data)
    }

    return data

  } catch (error) {
    console.log(`Planets error: `, error)
  }
}

const getAllPlanets = async (req, res) => {
  try {
    const data = await getPlanets(`${baseURL}/planets`) || []

    const planetPromises = data.map(planet => (
      axios.all(planet.residents.map(residentUrl => axios.get(residentUrl)))
        .then(residentResponses => ({
          ...planet,
          residents: residentResponses.map(response => response.data.name)
        }))
    ))

    const result = await Promise.all(planetPromises)

    res.send(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllPlanets
}
