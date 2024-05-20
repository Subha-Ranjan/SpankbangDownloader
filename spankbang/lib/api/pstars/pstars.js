const base = require('../base')
const parseResponse = require('./parseResponse')

const PATH = '/pornstars'

const pStars = async ({page = 1} = {}) =>{
    const request = base.createRequest()
    return parseResponse(page,await request.get(`${PATH}/${page}`))
}

module.exports = pStars