const base = require('../../base')
const parseResponse = require('../parseResponse')
const PATH = '/channels/'
const name = async ({ page = 1 } = {}) => {
    const request = base.createRequest()
    return parseResponse(
        base.Channels.Name, 
        await request.get(`${PATH}${page}?o=name`)
    )
}

module.exports = name