const base = require('../../base')
const parseResponse = require('./parseResponse')

const search = async ({ page = 1, search = '' } = {}) => {
    const request = base.createRequest()
    let query = '/s/'
    if (search !== '') {
        query += `${search}/${page}/?o=all`
    }
    return parseResponse(page, await request.get(query))
}
module.exports = search