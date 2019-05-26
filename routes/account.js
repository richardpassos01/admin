'use strict'

const router = require('express').Router()
const _ = require('lodash')
var request = require('request')
const async = require('async')

router.get('/',
(req, res, next) => {
    async.waterfall(
        [
          (nextInWaterfallChain) => {
            console.log('init request to get list accounts')
            request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
                if(error) {
                    console.log('error access api: ' + error)
                    return nextInWaterfallChain(error)
                }
                return nextInWaterfallChain(null, JSON.parse(body))
            })
            },
            (accounts, nextInWaterfallChain) => {
                var result = []
                console.log('init filter in list accounts')
                accounts.find(function (account) {
                   if(account.address.suite.toLowerCase().indexOf('suite') >= 0) {
                        result.push({
                            _id: account.id,
                            websites: account.website,
                            name: account.name,
                            email: account.email,
                            company: account.company.name,
                            address: {
                                street: account.address.street,
                                suite: account.address.suite
                            }
                        })
                    }
                })
                return nextInWaterfallChain(null,  _.orderBy(result, ['name'],['asc']))
            }
        ],
        (err, result) => {
            if (err) {
                console.log('error' + err)
                return res.redirect('/home')
            } else {
                console.log('finish successfully get users accounts')
                return res.render('account/list', {result})
            }
        }
    )
})

router.get('/:id',
    (req, res, next) => {
    res.render('account/details')
})

module.exports = router