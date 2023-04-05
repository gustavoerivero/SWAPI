const router = require('express').Router()
const cPeople = require('../controllers/CPeople')

router.get('/', cPeople.getAllPeople)

module.exports = router