const base = require('../../base')
const parseResponse = require('../parseResponse')
const PATH = '/channels/'
const hot = async ({page = 1}={})=>{
    const request = base.createRequest()
    return parseResponse(
        base.Channels.Popular, 
        await request.get(`${PATH}${page}?o=top`)
    )
}

module.exports = hot