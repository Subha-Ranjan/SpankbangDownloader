const base = require('../base')
const parseResponse = require('./parseResponse')
const PATH = '/pornstars_alphabet'
const searchPstar = async ({ search = '',limit = 0 } = {}) => {
    const request = base.createRequest()
    return parseResponse(limit,search,await request.get(`${PATH}`))
}
module.exports = searchPstar