'use strict'

const router = require('express').Router()
const usersActions = require('./../scripts/usersActions.js')

router.get('/',
    async (req, res, next) => {
        try {
            let users = await usersActions.getListAccounts()    
            let result = await usersActions.orderUser(users) 
            
            return res.render('account/list', {result})
        } catch (err) {
            console.error('Deu ruim ', err)
        }
    })

router.get('/:id',
    (req, res, next) => {
        res.render('account/details')
    })

module.exports = router