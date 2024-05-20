const base = require('../../base')
const parseResponse = require('../parseResponse')

const popular = async ({ path, page = 1 } ={})=>{
    try {
        const request = base.createRequest()
        return parseResponse(await request.get(`${path}/videos?o=top&page=${page}`))
    } catch (error) {
        throw `error:${error}`
    }
}

module.exports = popular