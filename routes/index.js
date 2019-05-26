    
'use strict'

const router = require('express').Router()

// loads the controllers
const accountRouter = require('./account')
const homeRouter = require('./home')

// protected routes
router.use('/account', accountRouter)
router.use('/', homeRouter)

module.exports = router