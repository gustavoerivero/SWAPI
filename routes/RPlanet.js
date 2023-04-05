const router = require('express').Router()
const cPlanet = require('../controllers/CPlanet')

router.get('/', cPlanet.getAllPlanets)

module.exports = router