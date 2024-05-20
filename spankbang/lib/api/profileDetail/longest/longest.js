const base = require('../../base')
const parseResponse = require('../parseResponse')

const longest = async ({ path, page = 1 } ={})=>{
    try {
        const request = base.createRequest()
        return parseResponse(await request.get(`${path}/videos?o=longest&page=${page}`))
    } catch (error) {
        throw `error:${error}`
    }
}

module.exports = longest