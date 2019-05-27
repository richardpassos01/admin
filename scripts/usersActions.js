const request = require('request')
const _ = require('lodash')

async function getListAccounts() {
    return new Promise((resolve, reject) => {
        request('https://jsonplaceholder.typicode.com/users', function (err, res, accounts) {
            if (err) {
                return reject(err)
            }
            return resolve(JSON.parse(accounts))
        })
    })
}

async function orderUser(users) {
    return new Promise((resolve, reject) => {
        try {
            let result = []
            users.forEach(user => {
                if (user.address.suite.toLowerCase().indexOf('suite') >= 0) {
                    result.push({
                        id: user.id,
                        website: user.website,
                        name: user.name,
                        email: user.email,
                        company: user.company.name,
                        address: {
                            street: user.address.street,
                            suite: user.address.suite
                        }
                    })
                }
            })
            return resolve(_.orderBy(result, ['name'], ['asc']))
        } catch (err) {
            return reject(err)
        }
    })
}

module.exports = {
    getListAccounts,
    orderUser
}