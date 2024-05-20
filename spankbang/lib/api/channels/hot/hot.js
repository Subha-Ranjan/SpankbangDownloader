const base = require('../../base')
const parseResponse = require('../parseResponse')
const PATH = '/channels/'

const hot = async ({page = 1}={}) =>{
    try {
        const request = base.createRequest()
        return parseResponse(base.Channels.Hot,await request.get(`${PATH}${page}?o=hot`))
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = hot