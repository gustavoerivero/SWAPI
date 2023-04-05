'use strict'

const router = require('express').Router()

router.use('/planets', require('./RPlanet'))
router.use('/people', require('./RPeople'))

module.exports = router