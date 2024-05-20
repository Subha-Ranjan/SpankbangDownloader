const base = require('../../base')
const parseResponse = require('../parseResponse')

const longest = async ({ path = '', page = 1 }) => {
    if (path != '') {
        try {
            const request = base.createRequest()
            return parseResponse(await request.get(`${path}/${page}/?o=long`))
        } catch (error) {
            throw new Error(error)
        }
    } else {
        return {
            'error': 'path empty'
        }
    }
}
module.exports = longest