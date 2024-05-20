const base = require('../../base')
const parseResponse = require('../parseResponse')

const present = async ({path,page=1}={}) => {
    try {
        const request = base.createRequest()
        return parseResponse(await request.get(`${path}/videos?o=new&page=${page}`))
    } catch (error) {
        throw `error xd:${error}`
    }
}

module.exports = present